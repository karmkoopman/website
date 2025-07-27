import { Phone, Mail } from 'lucide-react';
import whatsappLogo from '../assets/whatsapp.png';

const FloatingContactButtons = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
                          <a
              href="tel:+31626046159"
              className="bg-[#f5f5dc] text-primary p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Bel ons"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/31626046159"
              className="bg-[#f5f5dc] text-primary p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="WhatsApp"
            >
              <img src={whatsappLogo} alt="WhatsApp" className="h-6 w-6 object-contain" style={{ filter: 'invert(18%) sepia(8%) saturate(1162%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} />
            </a>
            <a
              href="mailto:info@koopman-schilderwerken.nl"
              className="bg-[#f5f5dc] text-primary p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Email ons"
            >
              <Mail className="h-6 w-6" />
            </a>
    </div>
  );
};

export default FloatingContactButtons; 