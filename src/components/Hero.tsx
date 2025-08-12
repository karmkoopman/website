import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import heroImage from '@/assets/HandRoller.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})`, top: '80px' }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-3 text-center mt-16 md:mt-32 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl max-w-lg mx-auto" style={{ color: '#000000' }}>
        <p className="text-lg mb-2">Koopman Schilderwerken</p>
        <h4 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          "Degelijk Werk kent<br />
          zijn Waarde"
        </h4>
        <p className="text-lg max-w-md mx-auto">
          Professioneel Buiten- en BinnenSchilderwerk
        </p>
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