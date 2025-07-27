import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';

const Offerte = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default Offerte;