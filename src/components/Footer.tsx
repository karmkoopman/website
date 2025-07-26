import { Paintbrush, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Paintbrush className="h-8 w-8" />
                <div>
                  <h3 className="text-xl font-bold">KOOPMAN</h3>
                  <p className="text-sm opacity-90">Schilderwerken</p>
                </div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Professioneel schilder- en glaszetwerk in Twente. 
                Vakwerk voor een eerlijke prijs met jaren garantie op het geleverde werk.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">06-12345678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@koopman-schilderwerken.nl</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Twente en omgeving</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Diensten</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Binnen- en buitenschilderwerk</li>
                <li>Glaszetten en glasvervanging</li>
                <li>Houtrotreparaties</li>
                <li>Gratis offerte en advies</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-75">
              © 2024 Koopman Schilderwerken. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;