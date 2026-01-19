import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import instagramLogo from '@/assets/Instagram-Logo.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

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
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [swiperError, setSwiperError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(API_URL);
        const data: InstagramFeedResponse = await response.json();

        if (data.error || !data.data) {
          throw new Error(data.message || 'Failed to fetch Instagram posts');
        }

        console.log('Instagram posts loaded:', data.data.length);
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

  const truncateCaption = (caption: string | undefined, maxLength: number = 100) => {
    if (!caption) return '';
    return caption.length > maxLength
      ? caption.substring(0, maxLength) + '...'
      : caption;
  };

  const handleSlideClick = (permalink: string) => {
    window.open(permalink, '_blank', 'noopener,noreferrer');
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
          <img src={instagramLogo} alt="Instagram" className="h-[72px] w-auto" />
        </h2>

        <div className="swiper-container">
          {swiperError && (
            <div className="text-center py-12 text-red-500">
              <p>Error loading carousel: {swiperError}</p>
            </div>
          )}
          {posts.length > 0 && !swiperError && (
            <Swiper
              onSwiper={(swiper) => {
                setSwiper(swiper);
                console.log('Swiper initialized:', swiper);
              }}
              effect="coverflow"
              loop={posts.length > 1}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1.5,
                },
                580: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 3.5,
                },
                1200: {
                  slidesPerView: 4,
                },
                1400: {
                  slidesPerView: 4.5,
                },
              }}
              modules={[EffectCoverflow, Pagination]}
              className="swiper-instagram"
            >
            {posts.map((post) => {
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

              return (
                <SwiperSlide
                  key={post.id}
                  onClick={() => handleSlideClick(post.permalink)}
                  className="swiper-slide-instagram"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                >
                  {isVideo && videoUrl && (
                    <video
                      src={videoUrl}
                      className="absolute inset-0 w-full h-full object-cover"
                      playsInline
                      loop
                      muted
                      autoPlay
                      poster={imageUrl}
                    />
                  )}

                  {/* Instagram logo overlay boven aan in het midden */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                    <img 
                      src={instagramLogo} 
                      alt="Instagram" 
                      className="h-6 w-auto drop-shadow-lg"
                    />
                  </div>

                  {/* Info overlay onderin */}
                  <div className="info">
                    <span title="Username">@{post.username}</span>
                    {post.caption && (
                      <span title="Caption">{truncateCaption(post.caption, 60)}</span>
                    )}
                    <span title="Date">{formattedDate}</span>
                  </div>
                </SwiperSlide>
              );
            })}
            </Swiper>
          )}
          {posts.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-slate-500">Geen posts beschikbaar</p>
            </div>
          )}
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

      <style>{`
        .swiper-container {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .swiper-slide-instagram {
          background-position: center;
          background-size: cover;
          width: 400px !important;
          height: 500px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .swiper-slide-instagram {
            width: 300px !important;
            height: 400px;
          }
        }

        .swiper-container-3d .swiper-slide-shadow-left {
          background-image: linear-gradient(to left, rgba(0,0,0,0.3), transparent);
          border-right: 1px solid rgba(0,0,0,0.1);
          border-radius: 10px;
        }

        .swiper-container-3d .swiper-slide-shadow-right {
          background-image: linear-gradient(to right, rgba(0,0,0,0.3), transparent);
          box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
          border-radius: 10px;
        }

        .swiper-pagination-bullet {
          background: #696969;
          transition: all 0.5s ease 0s;
          border-radius: 8px;
        }

        .swiper-pagination-bullet-active {
          background: #ffc107;
          width: 30px;
        }

        .info {
          position: absolute;
          width: calc(100% + 2px);
          height: calc(50% + 2px);
          text-align: center;
          background: linear-gradient(180deg, transparent 0, rgba(0,0,0,0.5) 50px), linear-gradient(180deg, transparent, rgba(0,0,0,0.6));
          padding: 15px;
          padding-top: 70px;
          left: 0;
          bottom: calc(-100% - 3px);
          box-sizing: border-box;
          transition: bottom 0.5s ease 0s;
        }

        .swiper-slide-active .info {
          bottom: 0;
          transition: bottom 0.5s ease 0s;
        }

        .info span {
          width: 100%;
          margin: 0.25em 0;
          display: inline-block;
          padding: 0.55em 0.5em 0.55em 4em;
          box-sizing: border-box;
          color: #E6E6E6;
          text-align: left;
          position: relative;
          text-transform: uppercase;
          font-size: 12px;
          border-radius: 2em;
        }

        .info span:hover {
          background: rgba(0,0,0,0.5);
          filter: invert(1);
        }

        .info span:before,
        .info span:after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          background: rgba(255,255,255,0.5);
          height: 100%;
          max-width: 2em;
        }

        /* Icon voor username (Instagram icon) */
        .info span:nth-child(1):before {
          background: radial-gradient(
            circle at 50% 50%,
            #E6E6E6 2px,
            transparent 3px 150%
          );
          width: 7px;
          height: 6px;
          border-radius: 100% 100% 100% 40%;
          left: 16px;
          top: 2px;
          border: 3px solid #E6E6E6;
          border-top-color: transparent;
          background-repeat: no-repeat;
          transform: rotate(29deg);
        }

        .info span:nth-child(1):after {
          background: linear-gradient(180deg, #E6E6E6 1px, transparent 1px 150%);
          width: 4px;
          height: 7px;
          border-radius: 100% 50% 100% 0%;
          left: 15px;
          top: 13px;
          border: 3px solid #E6E6E6;
          border-bottom-color: transparent;
          background-repeat: no-repeat;
          transform: rotate(-1deg);
        }

        /* Icon voor caption (text icon) */
        .info span:nth-child(2):before {
          background: radial-gradient(
            circle at 50% 42%,
            #E6E6E6 2px,
            transparent 3px 4px,
            #E6E6E6 5px 100%
          );
          width: 20px;
          height: 13px;
          left: 11px;
          top: 8px;
          border-radius: 2px;
        }

        .info span:nth-child(2):after {
          border: 10px solid transparent;
          border-width: 0px 2px 4px 2px;
          border-bottom-color: #E6E6E6;
          width: 10px;
          background: transparent;
          height: 0px;
          left: 14px;
          top: 5px;
        }

        /* Icon voor date (calendar icon) */
        .info span:nth-child(3):before {
          width: 22px;
          height: 22px;
          left: 11px;
          top: 3px;
          background: radial-gradient(circle at 60% 50%, #E6E6E6 1px, transparent 2px 100%),
            radial-gradient(circle at 37% 70%, #E6E6E6 1px, transparent 2px 100%),
            radial-gradient(circle at 52% 64%, #E6E6E6 1px, transparent 2px 100%),
            radial-gradient(circle at 45% 42%, #E6E6E6 1px, transparent 2px 100%),
            radial-gradient(circle at 49% 25%, #E6E6E6 1px, transparent 2px 100%),
            radial-gradient(circle at 61% 15%, #E6E6E6 1px, transparent 2px 100%),
            radial-gradient(
              circle at 18% 84%,
              transparent 1px,
              #E6E6E6 2px 3px,
              transparent 4px 100%
            ),
            radial-gradient(
              circle at 85% 16%,
              transparent 1px,
              #E6E6E6 2px 3px,
              transparent 4px 100%
            );
        }
      `}</style>
    </section>
  );
};

export default InstagramCarousel;
