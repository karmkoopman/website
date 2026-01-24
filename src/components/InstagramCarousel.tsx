import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";
import instagramLogo from "@/assets/Instagram-Logo.png";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
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
  ? "https://koopmanschilderwerken.nl/instagram-feed.php"
  : "/instagram-feed.php";

const InstagramCarousel = ({ title = "Volg ons op Instagram" }: InstagramCarouselProps) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [swiperError, setSwiperError] = useState<string | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(API_URL);
        const data: InstagramFeedResponse = await response.json();

        if (data.error || !data.data) {
          throw new Error(data.message || "Failed to fetch Instagram posts");
        }

        setPosts(data.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching Instagram posts:", err);
        setError("Kon Instagram posts niet laden");
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const truncateCaption = (caption: string | undefined, maxLength: number = 100) => {
    if (!caption) return "";
    return caption.length > maxLength ? caption.substring(0, maxLength) + "..." : caption;
  };

  const handleSlideClick = (permalink: string) => {
    // Voorkom openen tijdens swipen / slepen
    if (swiper && (swiper.isDragging || swiper.allowClick === false)) {
      return;
    }

    window.open(permalink, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <img src={instagramLogo} alt="Instagram" className="h-[72px] w-auto" />
          </h2>

          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
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
            <p>{error || "Geen Instagram posts beschikbaar"}</p>
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
              onSwiper={(s) => {
                setSwiper(s);
                // kleine nudge zodat Swiper na mount alles netjes berekent
                setTimeout(() => s.update(), 50);
              }}
              effect="coverflow"
              loop={posts.length > 1}
              grabCursor
              centeredSlides
              slidesPerView="auto"
              spaceBetween={30}
              coverflowEffect={{
                rotate: 45,
                stretch: 0,
                depth: 200,
                modifier: 1.6,
                slideShadows: true,
              }}
              breakpoints={{
                320: { 
                  spaceBetween: 12,
                  coverflowEffect: {
                    rotate: 30,
                    stretch: 0,
                    depth: 150,
                    modifier: 1.2,
                    slideShadows: true,
                  }
                },
                768: { 
                  spaceBetween: 20,
                  coverflowEffect: {
                    rotate: 40,
                    stretch: 0,
                    depth: 180,
                    modifier: 1.4,
                    slideShadows: true,
                  }
                },
                1024: { 
                  spaceBetween: 30,
                  coverflowEffect: {
                    rotate: 45,
                    stretch: 0,
                    depth: 200,
                    modifier: 1.6,
                    slideShadows: true,
                  }
                },
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination]}
              className="swiper-instagram"
            >
              {posts.map((post) => {
                const isVideo = post.media_type === "VIDEO";
                const imageUrl =
                  isVideo && post.thumbnail_url ? post.thumbnail_url : post.media_url;
                const videoUrl = isVideo ? post.media_url : null;

                const formattedDate = new Date(post.timestamp).toLocaleDateString("nl-NL", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                });

                return (
                  <SwiperSlide
                    key={post.id}
                    onClick={() => handleSlideClick(post.permalink)}
                    className="swiper-slide-instagram"
                  >
                    {/* media */}
                    {isVideo && videoUrl ? (
                      <video
                        src={videoUrl}
                        className="media"
                        playsInline
                        loop
                        muted
                        autoPlay
                        poster={imageUrl}
                      />
                    ) : (
                      <img
                        className="media"
                        src={imageUrl}
                        alt={
                          post.caption
                            ? truncateCaption(post.caption, 60)
                            : `Instagram post van ${post.username}`
                        }
                        loading="lazy"
                        decoding="async"
                      />
                    )}

                    {/* optioneel: logo of info hier weglaten zodat alleen de foto zichtbaar is */}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>

        <div className="text-center mt-8">
          <a
            href={
              posts[0] ? `https://www.instagram.com/${posts[0].username}` : "https://www.instagram.com"
            }
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
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .swiper-instagram {
      margin: 0 auto;
      width: 100%;
      max-width: 100%;
      position: relative;
    }

    /* Slide met duidelijke kaart-rand */
    .swiper-slide-instagram {
      width: 400px !important;
      height: 500px;
      border-radius: 16px;
      overflow: visible;
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border: 2px solid #e5e7eb;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 12px;
    }

    @media (max-width: 768px) {
      .swiper-slide-instagram {
        width: 280px !important;
        height: 350px; /* 4:5 verhouding zoals Instagram posts */
        padding: 8px;
      }
    }

    /* Media (img/video): binnen de kaart met padding - allemaal hetzelfde formaat */
    .swiper-slide-instagram .media {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
      background: #ffffff;
      border-radius: 8px;
    }

    /* Coverflow shadows passend bij kaart-stijl */
    .swiper-container-3d .swiper-slide-shadow-left,
    .swiper-container-3d .swiper-slide-shadow-right {
      border-radius: 16px;
    }

    .swiper-container-3d .swiper-slide-shadow-left {
      background-image: linear-gradient(to left, rgba(0,0,0,0.15), transparent);
    }

    .swiper-container-3d .swiper-slide-shadow-right {
      background-image: linear-gradient(to right, rgba(0,0,0,0.15), transparent);
    }

    .swiper-pagination {
      position: relative !important;
      margin-top: 30px;
      bottom: auto !important;
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
  `}</style>
    </section>
  );
};

export default InstagramCarousel;

