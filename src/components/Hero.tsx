import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-painter.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground mt-32">
        <p className="text-lg mb-4 opacity-90">Koopman Schilderwerken</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-16 leading-tight">
          "Degelijk Werk kent<br />
          zijn Waarde"
        </h1>
        <p className="text-xl md:text-2xl mb-20 opacity-90 max-w-2xl mx-auto">
          Professioneel Buiten- en BinnenSchilderwerk
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/offerte">
            <Button 
              size="lg"
              className="px-8 py-3"
              style={{ backgroundColor: '#91e5ff', color: 'white' }}
            >
              Gratis Offerte Aanvragen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;