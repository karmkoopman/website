import { useEffect } from 'react';

type InstagramEmbedProps = {
  title?: string;
};

const InstagramEmbed = ({ title = 'Volg ons op Instagram' }: InstagramEmbedProps) => {
  // Laad Elfsight script
  useEffect(() => {
    const existing = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (existing) return;

    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-8 bg-slate-50">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>}
        <div className="flex justify-center w-full">
          <div className="max-w-4xl w-full">
            <div className="elfsight-app-29469db9-b194-46f0-9e01-a6313fae24f5" data-elfsight-app-lazy></div>
          </div>
        </div>
        <style>{`
          .elfsight-app-29469db9-b194-46f0-9e01-a6313fae24f5 {
            margin: 0 auto !important;
            display: block !important;
            max-width: 600px !important;
            width: 100% !important;
          }
          .elfsight-app-29469db9-b194-46f0-9e01-a6313fae24f5 iframe,
          .elfsight-app-29469db9-b194-46f0-9e01-a6313fae24f5 > div {
            max-width: 100% !important;
            width: 100% !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default InstagramEmbed;


