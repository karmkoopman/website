import { Paintbrush, Phone, Mail, MapPin } from 'lucide-react';
import Logo2 from '../assets/Logo2.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={Logo2} alt="Koopman Schilderwerken Logo" className="h-10 w-auto" />
              </div>
              <p className="text-xs opacity-90 leading-relaxed">
                Professioneel schilder- en glaszetwerk in Twente. 
                Vakwerk voor een eerlijke prijs met jaren garantie op het geleverde werk.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <span className="text-xs">06-12345678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <span className="text-xs">info@koopman-schilderwerken.nl</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs">Twente en omgeving</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base font-semibold mb-4">Diensten</h4>
              <ul className="space-y-2 text-xs opacity-90">
                <li>Binnen- en buitenschilderwerk</li>
                <li>Glaszetten en glasvervanging</li>
                <li>Houtrotreparaties</li>
                <li>Gratis offerte en advies</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-2 pt-2 text-center">
            <p className="text-xs opacity-75">
              © 2024 Koopman Schilderwerken. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;