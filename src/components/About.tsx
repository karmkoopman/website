import { Card, CardContent } from '@/components/ui/card';
import paintedInterior from '@/assets/painted-interior.webp';

const About = () => {
  return (
    <section id="over-ons" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 mb-3">Over ons</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-card-foreground pr-20 lg:pr-0">
            Over ons
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <p className="text-lg leading-relaxed text-card-foreground mb-6 pr-20 lg:pr-0">
                    Koopman Schilderwerken is een eenmanszaak gevestigd aan huis. Door deze kleinschaligheid kunnen wij de kosten laag houden en klantgerichte service bieden.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-card-foreground mb-6 pr-20 lg:pr-0">
                    Bij ons draait het niet alleen om een nieuw likje verf. 
                    Goed schilderwerk heeft tijd en aandacht nodig.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-card-foreground mb-6 pr-20 lg:pr-0">
                    Daarom wordt de tijd genomen om samen met de klant te kijken wat de wensen 
                    zijn en wat nodig is om weer jaren verder te kunnen met uw pas geschilderde 
                    woning.
                  </p>

                  <p className="text-lg leading-relaxed text-card-foreground mb-6 pr-20 lg:pr-0">
                    Wij staan garant voor goede service, duidelijke offerte's, heldere communicatie en garantie op de geleverde diensten.
                  </p>

                  <p className="text-lg leading-relaxed text-card-foreground mb-6 pr-20 lg:pr-0">
                    Of het nu gaat om een verhuizing of verbouwing, of een renovatie project aan de buitenkant van uw woning. Wij kunnen het leveren en komen graag bij u langs voor een advies gesprek.
                  </p>
                  
                  <div className="bg-accent p-6 rounded-lg">
                    <p className="text-lg font-semibold text-accent-foreground">
                      Bent u op zoek naar een betrouwbare schilder in Twente?
                    </p>
                    <p className="text-base text-accent-foreground mt-2">
                      Heeft u vragen of wilt u een vrijblijvende offerte ontvangen?{' '}
                      <a
                        href="/offerte"
                        className="font-semibold underline hover:no-underline"
                      >
                        Gebruik dan het offerte- en contactformulier
                      </a>{' '}
                      of bel ons op{' '}
                      <a
                        href="tel:0626046159"
                        className="font-semibold underline hover:no-underline"
                      >
                        06-26046159
                      </a>
                      .
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