import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import InstagramCarousel from '@/components/InstagramCarousel';


const Projecten = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 space-y-12">
        <Projects />
        <InstagramCarousel
          title="Bekijk ook onze Instagram pagina"
        />
      </div>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default Projecten;