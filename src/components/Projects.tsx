import { Card, CardContent } from '@/components/ui/card';
import paintedInterior from '@/assets/painted-interior.jpg';
import glassWork from '@/assets/glass-work.jpg';
import woodRepair from '@/assets/wood-repair.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Woonhuis Renovatie",
      location: "Enschede",
      description: "Complete binnen- en buitenschildering van een jaren '30 woning inclusief houtrotreparaties.",
      image: paintedInterior
    },
    {
      title: "Kantoorpand Restyling",
      location: "Hengelo",
      description: "Professionele schilderwerken en glasvervanging voor moderne uitstraling.",
      image: glassWork
    },
    {
      title: "Monumentaal Pand",
      location: "Oldenzaal",
      description: "Restauratie schilderwerk met behoud van authentieke details en kleuren.",
      image: woodRepair
    }
  ];

  return (
    <section id="projecten" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Projecten
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-border shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 font-medium">
                      {project.location}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
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

export default Projects;