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
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {posts.map((post) => (
              <CarouselItem key={post.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-slate-100">
                      <img
                        src={post.media_type === 'VIDEO' && post.thumbnail_url ? post.thumbnail_url : post.media_url}
                        alt={truncateCaption(post.caption, 50)}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Instagram icon overlay */}
                      <div className="absolute top-2 right-2 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </div>

                      {/* Media type indicator */}
                      {post.media_type === 'VIDEO' && (
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                          </svg>
                          Video
                        </div>
                      )}
                      {post.media_type === 'CAROUSEL_ALBUM' && (
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
                          </svg>
                          Meerdere
                        </div>
                      )}
                    </div>

                    {/* Caption */}
                    {post.caption && (
                      <div className="p-4">
                        <p className="text-sm text-slate-700 line-clamp-3">
                          {truncateCaption(post.caption, 150)}
                        </p>
                      </div>
                    )}
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* View Instagram profile link */}
        <div className="text-center mt-8">
          <a
            href={posts[0] ? `https://www.instagram.com/${posts[0].username}` : 'https://www.instagram.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            <Instagram className="h-5 w-5" />
            Bekijk ons Instagram profiel
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;
