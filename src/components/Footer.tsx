import { Paintbrush, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              {/* Logo removed from here */}
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold mb-6 text-center">Contact</h4>
              <div className="space-y-3">
                {/* Removed contact items from here */}
              </div>
            </div>
          </div>

          {/* Place contact row above the border line */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-xs">06-12345678</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-xs">info@koopman-schilderwerken.nl</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-xs">Twente en omgeving</span>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-6 mt-2">
            <a
              href="https://facebook.com/koopmanschilderwerken"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/koopmanschilderwerken"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <div className="border-t border-primary-foreground/20 mt-2 pt-2 text-center">
            {/* KVK/BTW text */}
            <p className="text-[9px] opacity-80 mb-1">KVK : 12345678 &nbsp; &nbsp; BTW-Nr. : NL001234567B01</p>
            <p className="text-[6px] opacity-75">
              © 2025 Koopman Schilderwerken. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;