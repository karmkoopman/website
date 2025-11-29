import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import paintedInterior from '@/assets/painted-interior.webp';
import glassWork from '@/assets/glass-work.webp';
import woodRepair from '@/assets/wood-repair.webp';
import project1_1 from '@/assets/IMG20230419121500.webp';
import project1_2 from '@/assets/IMG20230419121511.webp';
import project1_3 from '@/assets/IMG20230707111001.webp';
import wa473 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.47.webp';
import wa47_1 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.47 (1).webp';
import wa47_2 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.47 (2).webp';
import wa47_3 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.47 (3).webp';
import wa48 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.48.webp';
import wa48_1 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.48 (1).webp';
import wa48_2 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.48 (2).webp';
import wa48_3 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.48 (3).webp';
import wa48_4 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.48 (4).webp';
import wa48_5 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.48 (5).webp';
import wa48_7 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.48 (7).webp';
import wa48_8 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.48 (8).webp';
import wa50 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.50.webp';
import wa50_1 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.50 (1).webp';
import wa50_2 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.50 (2).webp';
import wa50_3 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.50 (3).webp';
import project2_1 from '@/assets/IMG20230707111004.webp';
import project2_2 from '@/assets/IMG20230726084350.webp';
import project2_3 from '@/assets/IMG20230726084800.webp';
import wa48_6 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.48 (6).webp';
import wa51_1 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.51 (1).webp';
import wa50_4 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.50 (4).webp';
import wa51 from '@/assets/WhatsApp Image 2025-11-26 at 07.33.51.webp';
import project3_1 from '@/assets/IMG20230221151905.webp';
import project3_2 from '@/assets/IMG20230608155345.webp';
import project3_3 from '@/assets/IMG20230921143909.webp';

export const projectsData = [
    {
      title: "Woonhuis Renovatie",
      location: "Enschede",
      description: "Complete binnen- en buitenschildering van een jaren '30 woning inclusief houtrotreparaties.",
      images: [
        wa473,
        wa47_1,
        wa47_2,
        wa47_3,
        wa48_1,
        wa48_2,
        wa48_5,
        wa48_7,
        wa48_8,
        wa48,
        wa50_1,
        wa50_2,
        wa50_3,
        wa50,
        project1_1,
        project1_2,
        project1_3,
      ]
    },
    {
      title: "Kantoorpand Restyling",
      location: "Hengelo",
      description: "Professionele schilderwerken en glasvervanging voor moderne uitstraling.",
      images: [
        wa48_6,      // bruine deur
        wa51_1,
        wa50_4,
        wa51,
        glassWork,
        project2_1,
        project2_2,
        project2_3,
      ]
    },
    {
      title: "Monumentaal Pand",
      location: "Oldenzaal",
      description: "Restauratie schilderwerk met behoud van authentieke details en kleuren.",
      images: [woodRepair, project3_1, project3_2, project3_3]
    },
    {
      title: "Houtrot werk",
      location: "Diverse locaties",
      description: "Herstel van aangetast houtwerk, vervangen van delen en duurzaam repareren met epoxy.",
      images: [
        // specifiek door jou opgegeven houtrot-foto's
        wa48_3,
        wa48_4,
      ]
    }
  ];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const projects = projectsData;

  // Reset image index when project changes
  useEffect(() => {
    if (selectedProject !== null) {
      setSelectedImageIndex(0);
    }
  }, [selectedProject]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject === null) return;
      
      const currentProject = projects[selectedProject];
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => 
          prev > 0 ? prev - 1 : currentProject.images.length - 1
        );
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => 
          prev < currentProject.images.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, selectedImageIndex]);

  const goToPrevious = () => {
    if (selectedProject === null) return;
    const currentProject = projects[selectedProject];
    setSelectedImageIndex((prev) => 
      prev > 0 ? prev - 1 : currentProject.images.length - 1
    );
  };

  const goToNext = () => {
    if (selectedProject === null) return;
    const currentProject = projects[selectedProject];
    setSelectedImageIndex((prev) => 
      prev < currentProject.images.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section id="projecten" className="py-8 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground pr-20 lg:pr-0">
            Projecten
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-border shadow-[0_10px_15px_-3px_rgba(145,229,255,0.15)] overflow-hidden hover:shadow-[0_20px_25px_-5px_rgba(145,229,255,0.25)] transition-shadow cursor-pointer"
              >
                <CardContent className="p-0">
                  <div 
                    className="relative cursor-pointer"
                    onClick={() => {
                      setSelectedProject(index);
                      setSelectedImageIndex(0);
                    }}
                  >
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 hover:bg-primary/30 transition-colors" />
                    {project.images.length > 1 && (
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {project.images.length} foto's
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-2 pr-20 lg:pr-0">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 font-medium pr-20 lg:pr-0">
                      {project.location}
                    </p>
                    <p className="text-muted-foreground leading-relaxed pr-20 lg:pr-0">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Dialog open={selectedProject !== null} onOpenChange={() => {
            setSelectedProject(null);
            setSelectedImageIndex(0);
          }}>
            <DialogContent className="max-w-5xl p-0 max-h-[90vh] overflow-hidden flex flex-col">
              {selectedProject !== null && (
                <div className="relative flex flex-col h-full">
                  {/* Image container with navigation */}
                  <div className="relative flex-1 overflow-hidden bg-slate-900">
                    <img
                      src={projects[selectedProject].images[selectedImageIndex]}
                      alt={`${projects[selectedProject].title} - Foto ${selectedImageIndex + 1}`}
                      className="w-full h-full max-h-[70vh] object-contain"
                    />
                    
                    {/* Navigation buttons */}
                    {projects[selectedProject].images.length > 1 && (
                      <>
                        <button
                          onClick={goToPrevious}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                          aria-label="Vorige foto"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={goToNext}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                          aria-label="Volgende foto"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                        
                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded text-sm">
                          {selectedImageIndex + 1} / {projects[selectedProject].images.length}
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Project info */}
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-semibold mb-2">{projects[selectedProject].title}</h3>
                    <p className="text-sm text-slate-500 mb-2">{projects[selectedProject].location}</p>
                    <p className="text-slate-600 mb-4">
                      {projects[selectedProject].description}
                    </p>
                    
                    {/* Thumbnail navigation */}
                    {projects[selectedProject].images.length > 1 && (
                      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                        {projects[selectedProject].images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedImageIndex(idx)}
                            className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                              idx === selectedImageIndex 
                                ? 'border-primary scale-105' 
                                : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={img}
                              alt={`Thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Projects;