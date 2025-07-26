import { Card, CardContent } from '@/components/ui/card';
import { Glasses, Brush, Wrench } from 'lucide-react';
import glassWork from '@/assets/glass-work.jpg';
import paintedInterior from '@/assets/painted-interior.jpg';
import woodRepair from '@/assets/wood-repair.jpg';

const Services = () => {
  const services = [
    {
      icon: <Glasses className="h-12 w-12 text-primary" />,
      title: "Glaszetten",
      description: "Ook voor het zetten van glas bent u aan het goede adres bij Koopman Schilderwerken. Of het nu gaat om het vervangen van enkelglas door energiebesparend dubbelglas of het plaatsen van veiligheidsglas of figuurglas, wij staan voor u klaar. Met onze ervaring en oog voor detail creëren we een comfortabele en stijlvolle leefomgeving.",
      image: glassWork
    },
    {
      icon: <Brush className="h-12 w-12 text-primary" />,
      title: "Schilder Werkzaamheden",
      description: "Professioneel binnen- en buitenschilderwerk voor een prachtige uitstraling. Door de vakbekwaamheid wordt kwaliteit geleverd en zorgen voor een duurzaam resultaat. Van het schilderen van muren en plafonds tot het beschermen van houtwerk en gevels, wij bieden een complete service. Met oog voor detail en gebruik van hoogwaardige verfproducten creëren we een stijlvolle en verzorgde woon- of werkomgeving.",
      image: paintedInterior
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Houtrot Reparaties",
      description: "Effectieve houtrotreparaties voor behoud van uw houten constructies. Wij herstellen en vervangen aangetast hout met duurzame materialen en behandelingen. Door preventieve maatregelen en vakkundige reparaties zorgen we ervoor dat uw houtwerk weer jarenlang meegaat. Vertrouw op onze expertise voor het behoud van de structurele integriteit en schoonheid van uw houten elementen.",
      image: woodRepair
    }
  ];

  return (
    <section id="werkzaamheden" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Werkzaamheden
          </h2>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="border-border shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        {service.icon}
                        <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <div className={`relative ${index % 2 === 1 ? 'md:order-first' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;