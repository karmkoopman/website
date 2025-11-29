import { MessageCircle } from 'lucide-react';
import whatsappIcon from '../assets/WhatsaappIcon.png';
import phoneIcon from '../assets/PhoneIcon.png';
import emailIcon from '../assets/EmailIcon.png';

const FloatingContactButtons = () => {
  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col gap-3 md:right-6 md:bottom-24 pointer-events-auto">
      <a
        href="tel:+31626046159"
        className="p-3 md:p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: '#91e5ff', color: 'white' }}
        aria-label="Bel ons"
      >
        <img src={phoneIcon} alt="Phone" className="h-5 w-5 md:h-5 md:w-5 object-contain" />
      </a>
      <a
        href="https://wa.me/31626046159"
        className="p-3 md:p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: '#91e5ff', color: 'white' }}
        aria-label="WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5 md:h-5 md:w-5 object-contain" />
      </a>
      <a
        href="mailto:info@koopmanschilderwerken.nl"
        className="p-3 md:p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: '#91e5ff', color: 'white' }}
        aria-label="Email ons"
      >
        <img src={emailIcon} alt="Email" className="h-5 w-5 md:h-5 md:w-5 object-contain" />
      </a>
    </div>
  );
};

export default FloatingContactButtons; 