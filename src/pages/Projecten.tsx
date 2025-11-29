import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import InstagramEmbed from '@/components/InstagramEmbed';


const Projecten = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 space-y-12">
        <Projects />
        <InstagramEmbed
          title="Bekijk ook onze instagram pagina"
        />
      </div>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default Projecten;