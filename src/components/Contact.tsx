import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    toast({
      title: "Offerte aanvraag verzonden!",
      description: "We nemen binnen 24 uur contact met u op.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-card-foreground">
            Gratis Offerte Aanvragen
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">
                  Vraag uw offerte aan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      placeholder="uw.email@example.com"
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
                      placeholder="06-12345678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Beschrijving van uw project *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Beschrijf uw schilder- of glaszetproject..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
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
                      <p className="text-muted-foreground">06-12345678</p>
                      <p className="text-sm text-muted-foreground">Bereikbaar van 8:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground">E-mail</h3>
                      <p className="text-muted-foreground">info@koopman-schilderwerken.nl</p>
                      <p className="text-sm text-muted-foreground">We reageren binnen 24 uur</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground">Werkgebied</h3>
                      <p className="text-muted-foreground">Twente en omgeving</p>
                      <p className="text-sm text-muted-foreground">Enschede, Hengelo, Oldenzaal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-card-foreground">Werktijden</h3>
                      <p className="text-muted-foreground">Maandag - Vrijdag: 8:00 - 17:00</p>
                      <p className="text-muted-foreground">Zaterdag: Op afspraak</p>
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
                    <li>✓ Gratis offerte en advies</li>
                    <li>✓ Vakkundige uitvoering</li>
                    <li>✓ Concurrerende prijzen</li>
                    <li>✓ Jaren garantie op het werk</li>
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