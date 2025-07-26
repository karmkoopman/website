import { Card, CardContent } from '@/components/ui/card';
import paintedInterior from '@/assets/painted-interior.jpg';

const About = () => {
  return (
    <section id="over-ons" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-card-foreground">
            Over ons
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <p className="text-lg leading-relaxed text-card-foreground mb-6">
                    Koopman Schilderwerken is een eenmanszaak gevestigd aan huis. Door deze 
                    kleinschaligheid kunnen de kosten laag worden gehouden, maar word er toch 
                    kwaliteit geleverd door jaren lange ervaring.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-card-foreground mb-6">
                    Bij Koopman Schilderwerken draait het niet alleen om een nieuw likje verf. 
                    Goed schilderwerk heeft tijd en aandacht nodig.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-card-foreground mb-6">
                    Daarom wordt de tijd genomen om samen met de klant te kijken wat de wensen 
                    zijn en wat nodig is om weer jaren verder te kunnen met uw pas geschilderde 
                    woning of bedrijfspand.
                  </p>
                  
                  <div className="bg-accent p-6 rounded-lg">
                    <p className="text-lg font-semibold text-accent-foreground">
                      Bent u op zoek naar een betrouwbare schilder in Twente?
                    </p>
                    <p className="text-base text-accent-foreground mt-2">
                      Neem dan gerust contact met ons op en ontdek hoe wij u kunnen helpen.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <img
                src={paintedInterior}
                alt="Professioneel schilderwerk"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;