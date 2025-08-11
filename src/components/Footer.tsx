import { Paintbrush, Phone, Mail, MapPin } from 'lucide-react';

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
              <a href="tel:0626046159" className="text-xs hover:underline">06-26046159</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@koopmanschilderwerken.nl" className="text-xs hover:underline">info@koopmanschilderwerken.nl</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-xs">Twente en omgeving</span>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-2 pt-2 text-center">
            {/* KVK/BTW text */}
            <p className="text-[9px] opacity-80 mb-1">KVK : 97982644 &nbsp; &nbsp; BTW-Nr. : NL001234567B01</p>
            <p className="text-[6px] opacity-75">
              © {new Date().getFullYear()} Koopman Schilderwerken. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;