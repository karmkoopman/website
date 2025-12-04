import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';


const Projecten = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 space-y-12">
        <Projects />
      </div>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default Projecten;