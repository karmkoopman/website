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
  apiUrl?: string;
}

const InstagramCarousel = ({
  title = "Volg ons op Instagram",
  apiUrl = "/instagram-feed.php"
}: InstagramCarouselProps) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(apiUrl);
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
  }, [apiUrl]);

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
          <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
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
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>

        <Carousel
          opts={{
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
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
                <CarouselItem key={post.id} className="basis-full">
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900">
                      {/* Achtergrondfoto zoals in het voorbeeld */}
                      <div
                        className="absolute inset-0 bg-center bg-cover"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                      />
                      {/* Donkere overlay */}
                      <div className="absolute inset-0 bg-black/35" />

                      {/* Info-balk onderin, vergelijkbaar met jouw HTML-voorbeeld */}
                      <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-6">
                        <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cyan-300 mb-1">
                          @{post.username}
                        </div>
                        {post.caption && (
                          <p className="text-sm sm:text-base font-medium text-white drop-shadow-md line-clamp-2">
                            {truncateCaption(post.caption, 100)}
                          </p>
                        )}
                        <div className="mt-1 text-[11px] text-slate-100/80">
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
