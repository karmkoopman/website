// Services component - displays all available services with descriptions and images
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import glasIcon from '@/assets/glas.png';
import schilderIcon from '@/assets/schilder.png';
import houtrotIcon from '@/assets/houtrot.png';
import timmermanIcon from '@/assets/Timmerman.png';
import reparatiesIcon from '@/assets/Reparaties.png';
import image2 from '@/assets/2.webp';
import houtrotImage from '@/assets/houtrot.webp';
import glaszettenImage from '@/assets/glaszetten.webp';
import boeideelImage from '@/assets/boeideel.webp';
import stucwerkImage from '@/assets/stucwerk en spacwerk.webp';

const Services = () => {
  const services = [
    {
      slug: 'schilderwerk',
      icon: <img src={schilderIcon} alt="Schilder" className="h-12 w-12 object-contain" />,
      title: "Schilder Werkzaamheden",
      description: "Professioneel binnen- en buitenschilderwerk voor een prachtige uitstraling. Voor vakkundig en duurzaam uitgevoerd schilderwerk bent u bij ons aan het goede adres. Buiten schilderwerk heeft aandacht nodig, daarom zorgen wij ervoor dat alle gebreken in uw deuren en kozijnen worden verholpen voordat er geschilderd wordt. En natuurlijk krijgt u altijd garantie op de geleverde diensten. Maar ook binnenschilderwerk verdiend zijn aandacht, de juiste kleuren en een strakke afwerking zorgen voor een schitterend eindresultaat. Uiteraard maken wij uitsluitend gebruik van professionele verfproducten.",
      image: image2
    },
    {
      slug: 'houtrot-reparatie',
      icon: <img src={houtrotIcon} alt="Houtrot" className="h-12 w-12 object-contain" />,
      title: "Houtrot Reparaties",
      description: "Het repareren en het vervangen van kozijndelen is een belangrijke stap in het schilder proces. Houtrot zien wij nooit over het hoofd en maken dit altijd kenbaar bij onze klanten. In overleg gaan we over tot het duurzaam repararen van de rotte plekken. Voor het reparen wordt gebruik gemaakt van een 2 componenten epoxy houtrotvuller en zo nodig vervangen wij grote delen met hardhout. Zo bent u verzekerd van een lange onderhoudsvrije periode op u pas geleverde schilderwerk.",
      image: houtrotImage
    },
    {
      slug: 'glaszetten',
      icon: <img src={glasIcon} alt="Glas" className="h-12 w-12 object-contain" />,
      title: "Glaszetten",
      description: "Ook voor het zetten van glas bent u aan het goede adres bij Koopman Schilderwerken. Of het nu gaat om het vervangen van enkelglas door energiebesparend dubbelglas of het plaatsen van veiligheidsglas of figuurglas, wij staan voor u klaar. Met onze ervaring en oog voor detail creëren we een comfortabele en stijlvolle leefomgeving.",
      image: glaszettenImage
    },
    {
      slug: 'timmerwerk',
      icon: <img src={timmermanIcon} alt="Timmerman" className="h-12 w-12 object-contain" />,
      title: "Timmerwerkzaamheden",
      description: "Of het nu gaat om het repareren of geheel vervangen van boeidelen, kozijnreparaties of het bijschaven van een deur zodat deze weer mooi sluit, wij zijn hiermee graag van dienst. Als het gaat om andere kleine timmerdiensten is er heel veel mogelijk, zo hebben wij al van dienst kunnen zijn met het leggen van een vloer tot het afmonteren van verlichting en raamdecoratie. Een klein stukje service zodat uw verhuis of verbouw project helemaal af is. Vraag gerust naar de mogelijkheden.",
      image: boeideelImage
    },
    {
      slug: 'reparatiewerk',
      icon: <img src={reparatiesIcon} alt="Reparaties" className="h-12 w-12 object-contain" />,
      title: "Reparatiewerk",
      description: "Stuc- of pleisterwerk beschadigd? Dat is zonde en blijf je zien als je er zomaar overheen schilderd. Natuurlijk zijn wij ervaren in het zorgvuldig repareren van vele soorten pleisterwerk, zo ziet uw woon- of slaapkamer er weer prachtig uit na het sausen. Ook buiten zijn er soms reparaties nodig voor het behoud van langdurig mooi schilderwerk. Denk hierbij aan het repareren van een lekkende dakgoot of regenpijp of het vast zetten van een daktrim. Deze reparaties zorgen voor een goede afwatering en komen het pas geschilderde werk, maar ook uw gevels en dus uw gehele woning ten goede.",
      image: stucwerkImage
    }
  ];

  return (
    <section id="werkzaamheden" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground pr-20 lg:pr-0">
            Werkzaamheden
          </h2>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <Link key={service.slug} to={`/${service.slug}`} className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
                <Card className="border-border shadow-[0_10px_15px_-3px_rgba(145,229,255,0.15)] overflow-hidden transition-transform group-hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6 pr-20 lg:pr-0">
                          {service.icon}
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">
                              {service.title}
                            </h3>
                            <Link 
                              to={`/${service.slug}`}
                              onClick={(e) => e.stopPropagation()}
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
                            </Link>
                          </div>
                        </div>
                        <p className="text-lg leading-relaxed text-muted-foreground pr-20 lg:pr-0">
                          {service.description}
                        </p>
                      </div>
                      <div className={`relative ${index % 2 === 1 ? 'md:order-first' : ''}`}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-64 md:h-full object-contain"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;