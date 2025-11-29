import { Instagram } from 'lucide-react';

type InstagramFeedProps = {
  title?: string;
  showBackground?: boolean;
  compact?: boolean;
};

const InstagramFeed = ({
  title = 'Volg ons op Instagram',
  showBackground = true,
  compact = false,
}: InstagramFeedProps) => {
  const profileUrl = 'https://www.instagram.com/koopmanschilderwerken';

  // Deze URLs zijn placeholders; Instagram zelf staat geen directe feed zonder API toe.
  // Later kun je hier echte Instagram CDN-afbeeldingen of een externe feed-service voor gebruiken.
  const images = [
    '/src/assets/IMG20230419121500.webp',
    '/src/assets/IMG20230419121511.webp',
    '/src/assets/IMG20230707111001.webp',
    '/src/assets/IMG20230707111004.webp',
    '/src/assets/IMG20230726084350.webp',
    '/src/assets/IMG20230726084800.webp',
  ];

  return (
    <section className={showBackground ? 'py-12 bg-slate-50' : 'py-8'}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Instagram className="h-6 w-6 text-pink-500" />
            <div>
              <h2 className={`font-bold ${compact ? 'text-2xl' : 'text-3xl'}`}>
                {title}
              </h2>
              <p className="text-sm text-slate-600">
                Bekijk recente projecten, werk in uitvoering en inspiratie op ons Instagram-account.
              </p>
            </div>
          </div>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-800 hover:border-pink-500 hover:text-pink-500 transition-colors"
          >
            <Instagram className="h-4 w-4" />
            Naar Instagram
          </a>
        </div>

        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div
            className={`grid gap-3 ${
              compact ? 'grid-cols-3 md:grid-cols-6' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
            }`}
          >
            {images.map((src, index) => (
              <div
                key={src}
                className="relative overflow-hidden rounded-xl bg-slate-200 aspect-square"
              >
                <img
                  src={src}
                  alt={`Instagram foto ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </a>
      </div>
    </section>
  );
};

export default InstagramFeed;


