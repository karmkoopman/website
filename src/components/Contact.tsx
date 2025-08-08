import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

// Deployment test - updated workflow
// Testing with GitHub secrets
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      'service_gtoqyea', // <-- Replace with your EmailJS service ID
      'template_e4i87n3', // <-- Replace with your EmailJS template ID
      formData,
      '_uZyWbQh0MyDT-141' // <-- Replace with your EmailJS public key
    ).then(
      (result) => {
        toast({
          title: "Offerte aanvraag verzonden!",
          description: "We nemen zo snel mogelijk contact met u op.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      },
      (error) => {
        toast({
          title: "Er is iets misgegaan!",
          description: "Probeer het later opnieuw of mail direct.",
        });
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-card-foreground pr-20 lg:pr-0">
            Advies gesprek
          </h1>
          
          <p className="text-lg leading-relaxed text-card-foreground mb-12 text-center max-w-4xl mx-auto pr-20 lg:pr-0">
            Om een vrijblijvend advies gesprek in te plannen en het opmaken van een offerte maken wij direct tijd voor u. Vul het aanvraagformulier hieronder in of bel/whatsapp ons voor het maken van een afspraak.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">
                  Aanvraag formulier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Naam *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      E-mailadres *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="uwnaam@emailadres.nl"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                      Telefoonnummer
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="06-26046159"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Beschrijf uw schilderproject
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Beschrijf uw schilderproject..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    style={{ backgroundColor: '#91e5ff', color: 'white', border: 'none' }}
                  >
                    Offerte Aanvragen
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">
                    Contactgegevens
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground">Telefoon</h3>
                      <a href="tel:0626046159" className="text-muted-foreground hover:underline">06-26046159</a>
                      <p className="text-sm text-muted-foreground">Bereikbaar van 8:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground">E-mail</h3>
                      <a href="mailto:info@koopmanschilderwerken.nl" className="text-muted-foreground hover:underline">info@koopmanschilderwerken.nl</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground">Werkgebied</h3>
                      <p className="text-muted-foreground">Twente en omgeving</p>
                      <p className="text-sm text-muted-foreground">Enschede, Almelo, Hengelo, Oldenzaal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground">Werktijden</h3>
                      <p className="text-muted-foreground">Maandag - Vrijdag: 8:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border shadow-lg bg-accent">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-accent-foreground mb-4">
                    Waarom Koopman Schilderwerken?
                  </h3>
                  <ul className="space-y-2 text-accent-foreground">
                    <li>✓ Vrijblijvende offerte en advies</li>
                    <li>✓ Vakkundige uitvoering</li>
                    <li>✓ 8 jaar ervaring in het schildervak</li>
                    <li>✓ Service en Garantie</li>
                    <li>✓ Nette en schone oplevering</li>
                    <li>✓ Lokale schilder uit Twente</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;