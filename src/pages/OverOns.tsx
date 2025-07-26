import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

const OverOns = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default OverOns;