import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Projecten = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Projecten;