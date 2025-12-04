import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ExternalLink, Instagram } from 'lucide-react';

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
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Instagram className="h-6 w-6" />
            Koopmanschilderwerken
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
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Instagram className="h-6 w-6" />
            Koopmanschilderwerken
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
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <Instagram className="h-6 w-6" />
          Koopmanschilderwerken
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {posts.map((post) => {
              const imageUrl =
                post.media_type === 'VIDEO' && post.thumbnail_url
                  ? post.thumbnail_url
                  : post.media_url;

              const formattedDate = new Date(post.timestamp).toLocaleDateString('nl-NL', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              });

              return (
                <CarouselItem key={post.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg bg-slate-900 shadow-lg transition-transform duration-300 group-hover:scale-105">
                      {/* Achtergrondfoto - 1080x1350px formaat */}
                      <div
                        className="absolute inset-0 bg-center bg-cover"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                      />
                      {/* Donkere overlay */}
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />

                      {/* Info-balk onderin */}
                      <div className="relative z-10 flex h-full flex-col justify-end p-3 sm:p-4">
                        <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-cyan-300 mb-1">
                          @{post.username}
                        </div>
                        {post.caption && (
                          <p className="text-xs sm:text-sm font-medium text-white drop-shadow-md line-clamp-2">
                            {truncateCaption(post.caption, 80)}
                          </p>
                        )}
                        <div className="mt-1 text-[10px] text-slate-100/80">
                          {formattedDate}
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Navigatiepijlen alleen op desktop tonen */}
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

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
