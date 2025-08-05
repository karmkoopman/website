import { Card, CardContent } from '@/components/ui/card';
import glassWork from '@/assets/glass-work.jpg';
import paintedInterior from '@/assets/painted-interior.jpg';
import woodRepair from '@/assets/wood-repair.jpg';
import Glaszetten from '@/assets/Glaszetten.jpg';
import BinnenSchilderwerk from '@/assets/BinnenSchilderwerk.jpg';
import glasIcon from '@/assets/glas.png';
import schilderIcon from '@/assets/schilder.png';
import houtrotIcon from '@/assets/houtrot.png';
import timmermanIcon from '@/assets/Timmerman.png';
import reparatiesIcon from '@/assets/Reparaties.png';

const Services = () => {
  const services = [
    {
      icon: <img src={schilderIcon} alt="Schilder" className="h-12 w-12 object-contain" />,
      title: "Schilder Werkzaamheden",
      description: "Professioneel binnen- en buitenschilderwerk voor een prachtige uitstraling. Door de vakbekwaamheid wordt kwaliteit geleverd en zorgen voor een duurzaam resultaat. Van het schilderen van muren en plafonds tot het beschermen van houtwerk en gevels, wij bieden een complete service. Met oog voor detail en gebruik van hoogwaardige verfproducten creëren we een stijlvolle en verzorgde woon- of werkomgeving.",
      image: paintedInterior
    },
    {
      icon: <img src={houtrotIcon} alt="Houtrot" className="h-12 w-12 object-contain" />,
      title: "Houtrot Reparaties",
      description: "Effectieve houtrotreparaties voor behoud van uw houten constructies. Wij herstellen en vervangen aangetast hout met duurzame materialen en behandelingen. Door preventieve maatregelen en vakkundige reparaties zorgen we ervoor dat uw houtwerk weer jarenlang meegaat. Vertrouw op onze expertise voor het behoud van de structurele integriteit en schoonheid van uw houten elementen.",
      image: woodRepair
    },
    {
      icon: <img src={glasIcon} alt="Glas" className="h-12 w-12 object-contain" />,
      title: "Glaszetten",
      description: "Ook voor het zetten van glas bent u aan het goede adres bij Koopman Schilderwerken. Of het nu gaat om het vervangen van enkelglas door energiebesparend dubbelglas of het plaatsen van veiligheidsglas of figuurglas, wij staan voor u klaar. Met onze ervaring en oog voor detail creëren we een comfortabele en stijlvolle leefomgeving.",
      image: glassWork
    },
    {
      icon: <img src={timmermanIcon} alt="Timmerman" className="h-12 w-12 object-contain" />,
      title: "Timmerman Werkzaamheden",
      description: "Vakkundige timmerwerkzaamheden voor al uw houtwerk en constructies. Wij verzorgen het maken en repareren van kozijnen, deuren, trappen en andere houten elementen. Met onze expertise in houtbewerking en oog voor detail zorgen we voor duurzame en stijlvolle oplossingen. Van kleine reparaties tot complete houtwerkprojecten, wij staan voor u klaar.",
      image: BinnenSchilderwerk
    },
    {
      icon: <img src={reparatiesIcon} alt="Reparaties" className="h-12 w-12 object-contain" />,
      title: "Binnen Schilderwerk",
      description: "Professioneel binnenschilderwerk voor een frisse en verzorgde uitstraling. Wij schilderen muren, plafonds, kozijnen en andere binnenoppervlakken met zorgvuldige aandacht voor detail. Gebruik van hoogwaardige verfproducten en moderne technieken zorgen voor een duurzaam en mooi resultaat. Van complete woningen tot specifieke ruimtes, wij maken uw interieur weer als nieuw.",
      image: Glaszetten
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