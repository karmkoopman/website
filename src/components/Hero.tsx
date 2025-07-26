import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-painter.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <p className="text-lg mb-4 opacity-90">Koopman Schilderwerken</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          "Vakwerk voor<br />
          een Eerlijke Prijs"
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          Professioneel schilder- en glaszetwerk in Twente
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3"
          >
            Gratis Offerte Aanvragen
          </Button>
        </div>
      </div>

      {/* Contact Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
        <a
          href="tel:+31612345678"
          className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Bel ons"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/31612345678"
          className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href="mailto:info@koopman-schilderwerken.nl"
          className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Email ons"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;