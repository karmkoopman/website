import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import InstagramCarousel from '@/components/InstagramCarousel';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="pt-24 pb-20 space-y-12">
        <section className="container mx-auto px-4 max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Een selectie van foto&apos;s en impressies van gerealiseerde projecten door Koopman Schilderwerken.
            Blader door onze Instagram feed hieronder voor recente voorbeelden van schilderwerk, houtrot reparaties,
            glaszetten en timmerwerk.
          </p>
        </section>

        <InstagramCarousel title="Bekijk ook onze instagram pagina" />
      </main>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default Portfolio;


