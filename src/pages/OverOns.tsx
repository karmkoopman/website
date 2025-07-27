import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';

const OverOns = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default OverOns;