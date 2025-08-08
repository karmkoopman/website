import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail } from 'lucide-react';
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

      {/* Contact Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
        <a
          href="tel:+31626046159"
          className="p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          style={{ backgroundColor: '#91e5ff', color: 'white' }}
          aria-label="Bel ons"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/31626046159"
          className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href="mailto:info@koopmanschilderwerken.nl"
          className="p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          style={{ backgroundColor: '#91e5ff', color: 'white' }}
          aria-label="Email ons"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;