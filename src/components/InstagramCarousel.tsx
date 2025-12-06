import { useState, useEffect, useRef } from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import instagramLogo from '@/assets/Instagram-Logo.png';

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
  username: string;
}

interface InstagramFeedResponse {
  error: boolean;
  data?: InstagramPost[];
  message?: string;
}

interface InstagramCarouselProps {
  title?: string;
}

// Use production URL during local development, relative path in production
const API_URL = import.meta.env.DEV
  ? 'https://koopmanschilderwerken.nl/instagram-feed.php'
  : '/instagram-feed.php';

const InstagramCarousel = ({
  title = "Volg ons op Instagram",
}: InstagramCarouselProps) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const isSwiping = useRef<boolean>(false);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(API_URL);
        const data: InstagramFeedResponse = await response.json();

        if (data.error || !data.data) {
          throw new Error(data.message || 'Failed to fetch Instagram posts');
        }

        setPosts(data.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Kon Instagram posts niet laden');
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  // Controleer video's wanneer currentIndex verandert
  useEffect(() => {
    Object.keys(videoRefs.current).forEach((postId) => {
      const video = videoRefs.current[postId];
      if (video) {
        const postIndex = posts.findIndex(p => p.id === postId);
        if (postIndex === currentIndex) {
          // Video is centraal - speel af
          video.play().catch(() => {
            // Negeer autoplay errors (browsers blokkeren soms autoplay)
          });
        } else {
          // Video is niet centraal - pauzeer
          video.pause();
        }
      }
    });
  }, [currentIndex, posts]);

  // Native touch event listeners voor betere controle op mobiel
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let startX = 0;
    let currentX = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      currentX = startX;
      isSwiping.current = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!startX) return;
      currentX = e.touches[0].clientX;
      const deltaX = Math.abs(startX - currentX);
      
      // Als horizontale beweging > 10px, voorkom scrollen
      if (deltaX > 10) {
        isSwiping.current = true;
        e.preventDefault();
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!startX) {
        startX = 0;
        currentX = 0;
        isSwiping.current = false;
        return;
      }

      const distance = startX - currentX;
      const minSwipeDistance = 50;

      if (isSwiping.current && Math.abs(distance) > minSwipeDistance) {
        e.preventDefault();
        if (distance > minSwipeDistance) {
          // Swipe left - next (loop rond)
          setCurrentIndex((prev) => (prev < posts.length - 1 ? prev + 1 : 0));
        } else if (distance < -minSwipeDistance) {
          // Swipe right - previous (loop rond)
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : posts.length - 1));
        }
      }

      startX = 0;
      currentX = 0;
      isSwiping.current = false;
    };

    // Gebruik passive: false voor preventDefault
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd, { passive: false });

    return () => {
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, [currentIndex, posts.length]);

  const handleImageClick = (permalink: string) => {
    // Alleen klikken als het geen swipe was
    if (!isSwiping.current) {
      window.open(permalink, '_blank', 'noopener,noreferrer');
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : posts.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < posts.length - 1 ? prev + 1 : 0));
  };

  const truncateCaption = (caption: string | undefined, maxLength: number = 100) => {
    if (!caption) return '';
    return caption.length > maxLength
      ? caption.substring(0, maxLength) + '...'
      : caption;
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <img src={instagramLogo} alt="Instagram" className="h-[72px] w-auto" />
          </h2>
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <img src={instagramLogo} alt="Instagram" className="h-[72px] w-auto" />
          </h2>
          <div className="flex flex-col items-center justify-center py-12 text-slate-500">
            <Instagram className="h-16 w-16 mb-4" />
            <p>{error || 'Geen Instagram posts beschikbaar'}</p>
          </div>
        </div>
      </section>
    );
  }

  // Zorg dat we minimaal 5 items hebben om te tonen
  const visibleItems = Math.max(5, posts.length);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
          <img src={instagramLogo} alt="Instagram" className="h-[88px] w-auto" />
        </h2>

        <div 
          ref={carouselRef}
          className="relative w-full max-w-6xl mx-auto overflow-hidden"
          style={{
            perspective: '1500px',
            perspectiveOrigin: 'center center',
            minHeight: '500px',
            touchAction: 'pan-y pinch-zoom', // Sta verticale scroll en pinch-zoom toe, voorkom horizontaal scrollen
          }}
        >
          {/* Linker pijl - alleen zichtbaar op desktop */}
          <button
            onClick={handlePrevious}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            aria-label="Vorige slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Rechter pijl - alleen zichtbaar op desktop */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            aria-label="Volgende slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div 
            className="relative flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              height: '500px',
            }}
          >
            {posts.slice(0, visibleItems).map((post, index) => {
              const isVideo = post.media_type === 'VIDEO';
              const imageUrl = isVideo && post.thumbnail_url
                ? post.thumbnail_url
                : post.media_url;
              const videoUrl = isVideo ? post.media_url : null;

              const formattedDate = new Date(post.timestamp).toLocaleDateString('nl-NL', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              });

              // Bereken de afstand van de centrale slide (met loop support)
              const directDistance = index - currentIndex;
              const wrapDistance = directDistance > 0 
                ? directDistance - posts.length 
                : directDistance + posts.length;
              const distance = Math.min(Math.abs(directDistance), Math.abs(wrapDistance));
              
              // Bepaal of het links of rechts is (kortste pad)
              const useWrap = Math.abs(wrapDistance) < Math.abs(directDistance);
              const effectiveDistance = useWrap ? wrapDistance : directDistance;
              
              const isCenter = index === currentIndex;
              const isLeft = effectiveDistance < 0;
              const isRight = effectiveDistance > 0;

              // 3D transform berekeningen
              let rotateY = 0;
              let scale = 1;
              let translateZ = 0;
              let translateX = 0;
              let opacity = 1;
              let zIndex = 1;

              if (isCenter) {
                // Centrale slide: groot en prominent
                scale = 1;
                rotateY = 0;
                translateZ = 0;
                translateX = 0;
                opacity = 1;
                zIndex = 10;
              } else if (distance === 1) {
                // Directe buren: verkleind en geroteerd met lichte overlap
                scale = 0.75;
                rotateY = isLeft ? 35 : -35;
                translateZ = -100;
                translateX = isLeft ? -180 : 180;
                opacity = 0.95;
                zIndex = 5;
              } else if (distance === 2) {
                // Tweede buren: meer verkleind en geroteerd
                scale = 0.6;
                rotateY = isLeft ? 50 : -50;
                translateZ = -200;
                translateX = isLeft ? -320 : 320;
                opacity = 0.85;
                zIndex = 3;
              } else if (distance === 3) {
                // Derde buren: nog kleiner
                scale = 0.5;
                rotateY = isLeft ? 60 : -60;
                translateZ = -300;
                translateX = isLeft ? -420 : 420;
                opacity = 0.75;
                zIndex = 2;
              } else {
                // Verder weg: nog kleiner
                scale = 0.4;
                rotateY = isLeft ? 70 : -70;
                translateZ = -400;
                translateX = isLeft ? -500 : 500;
                opacity = 0.65;
                zIndex = 1;
              }

              return (
                <div
                  key={post.id}
                  onClick={(e) => {
                    // Voorkom klikken tijdens/na swipe
                    if (!isSwiping.current) {
                      handleImageClick(post.permalink);
                    }
                  }}
                  className="absolute cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: opacity,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-in-out',
                    willChange: 'transform, opacity',
                    zIndex: zIndex,
                    left: '50%',
                    marginLeft: '-150px', // Half van de breedte voor centrering
                    pointerEvents: 'auto',
                  }}
                >
                  <div className="relative w-[300px] aspect-[4/5] overflow-hidden rounded-lg bg-slate-900 shadow-2xl transition-transform duration-300 hover:scale-105">
                    {isVideo && videoUrl ? (
                      <>
                        {/* Video element voor reels */}
                        <video
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[post.id] = el;
                            }
                          }}
                          src={videoUrl}
                          className="absolute inset-0 w-full h-full object-cover"
                          playsInline
                          loop
                          muted
                          autoPlay={isCenter}
                          poster={imageUrl}
                        />
                        {/* Play indicator overlay wanneer niet centraal */}
                        {!isCenter && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      /* Afbeelding voor foto's */
                      <div
                        className="absolute inset-0 bg-center bg-cover"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                      />
                    )}

                    {/* Info-balk onderin */}
                    <div className="relative z-10 flex h-full flex-col justify-end p-4 bg-gradient-to-t from-black/40 via-black/10 to-transparent">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-300 mb-1">
                        @{post.username}
                      </div>
                      {post.caption && (
                        <p className="text-xs font-medium text-white drop-shadow-md line-clamp-2">
                          {truncateCaption(post.caption, 80)}
                        </p>
                      )}
                      <div className="mt-1 text-[10px] text-slate-100/80">
                        {formattedDate}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Footer-knop onder de carrousel: volg ons op Instagram */}
        <div className="text-center mt-8">
          <a
            href={posts[0] ? `https://www.instagram.com/${posts[0].username}` : 'https://www.instagram.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            <Instagram className="h-5 w-5" />
            Volg ons op Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;
