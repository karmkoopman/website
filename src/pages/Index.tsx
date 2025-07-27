import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default Index;