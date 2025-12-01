import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import InstagramEmbed from '@/components/InstagramEmbed';
import { serviceIntros } from '@/content/serviceIntros';
import heroImage from '@/assets/hero-painter.webp';
import paintedInterior from '@/assets/Ad (1 of 1)-22.jpg';
import schilderwerkImage from '@/assets/2.webp';
import houtrotImage from '@/assets/houtrot.webp';
import glaszettenImage from '@/assets/glaszetten.webp';
import timmerwerkImage from '@/assets/boeideel.webp';
import reparatieImage from '@/assets/stucwerk en spacwerk.webp';
import project1 from '@/assets/IMG20230419121500.webp';
import project2 from '@/assets/IMG20230419121511.webp';
import project3 from '@/assets/IMG20230707111001.webp';
import project4 from '@/assets/IMG20230707111004.webp';
import project1_2 from '@/assets/IMG20230726084350.webp';
import project1_3 from '@/assets/IMG20230726084800.webp';
import project2_2 from '@/assets/IMG20230221151905.webp';
import project2_3 from '@/assets/IMG20230608155345.webp';
import project3_2 from '@/assets/IMG20230921143909.webp';
import project3_3 from '@/assets/IMG20231004112807.webp';
import project4_2 from '@/assets/IMG_20231004_151310.webp';
import project4_3 from '@/assets/IMG-20231002-WA0001.webp';
import { projectsData } from '@/components/Projects';
import googleReviewLogo from '@/assets/Google-Review-Logo.png';
import sigmaLogo from '@/assets/sigma_logo_habeco_leverancier.png';
import renovaidLogo from '@/assets/renovaid-logo.png';
import veveoLogo from '@/assets/veveo_logo_habeco_leverancier.png';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Gebruik dezelfde projectdata als op de projectenpagina
  const projects = projectsData;

  // Reset image index when project changes
  useEffect(() => {
    if (selectedProject !== null) {
      setSelectedImageIndex(0);
    }
  }, [selectedProject]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollAmount = container.clientWidth * 0.9;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Initialize projects as hidden
  useEffect(() => {
    setVisibleProjects(new Array(projects.length).fill(false));
  }, []);

  // Set up Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-project-index') || '0');
            setVisibleProjects((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
            // Unobserve after animation triggers
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Delay to ensure DOM is ready and projects start hidden
    const timer = setTimeout(() => {
      const projectElements = document.querySelectorAll('[data-project-index]');
      projectElements.forEach((el) => observer.observe(el));
    }, 300);

    return () => {
      clearTimeout(timer);
      const projectElements = document.querySelectorAll('[data-project-index]');
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, [projects.length]);

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
    <div className="bg-white text-slate-900">
      <Header />

    {/* Hero */}
    <section className="relative isolate min-h-[60vh] md:min-h-[70vh] flex items-center bg-slate-900 text-white mt-16" id="hero">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Schilder aan het werk" className="w-full h-full object-cover brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-3xl space-y-6 md:space-y-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          "Degelijk werk kent zijn waarde"
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-slate-100">
          Professioneel Buiten- en Binnenschilderwerk
        </p>
      </div>
    </section>

    {/* Intro content under header */}
    <section className="bg-white py-8 md:py-12 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-6 md:space-y-8 text-center">
        <p className="text-base md:text-lg text-slate-700">
          Of het nu gaat om een verhuizing of verbouwing, of een renovatieproject aan het buiten schilderwerk. Wij nemen de tijd om uw wensen te bespreken en leveren strak en duurzaam schilderwerk met garantie.
        </p>
        <ul className="space-y-2.5 md:space-y-3 text-slate-700 list-none text-center max-w-2xl mx-auto">
          <li className="flex items-center justify-center gap-1">
            <span className="text-primary">•</span>
            <Link to="/schilderwerk" className="text-primary hover:underline">
              Professioneel buiten- en binnenschilderwerk
            </Link>
          </li>
          <li className="flex items-center justify-center gap-1">
            <span className="text-primary">•</span>
            <Link to="/houtrot-reparatie" className="text-primary hover:underline">
              Houtrot reparaties
            </Link>
          </li>
          <li className="flex items-center justify-center gap-1">
            <span className="text-primary">•</span>
            <Link to="/glaszetten" className="text-primary hover:underline">
              Glaszetten
            </Link>
          </li>
          <li className="flex items-center justify-center gap-1">
            <span className="text-primary">•</span>
            <Link to="/timmerwerk" className="text-primary hover:underline">
              Timmerwerkzaamheden
            </Link>
          </li>
          <li className="flex items-center justify-center gap-1">
            <span className="text-primary">•</span>
            <Link to="/reparatiewerk" className="text-primary hover:underline">
              Reparatiewerk
            </Link>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <a href="/offerte" className="w-full sm:w-auto text-center px-6 py-3 bg-[#91e5ff] text-slate-900 font-semibold rounded-full hover:bg-[#7fdcff] transition-colors">
            Gratis offerte aanvragen
          </a>
          <a href="tel:+31626046159" className="w-full sm:w-auto text-center px-6 py-3 bg-[#91e5ff] text-slate-900 font-semibold rounded-full hover:bg-[#7fdcff] transition-colors">
            Bel direct: 06-26046159
          </a>
        </div>
      </div>
    </section>

    {/* Google Reviews Logo */}
    <section className="bg-white pb-4 md:pb-4 pt-6 md:pt-8">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <a href="https://www.google.com/maps/search/Koopman+Schilderwerken+Hengelo/@52.2658,6.7933,15z/data=!4m2!2m1!4b1?entry=ttu&hl=nl#reviews" target="_blank" rel="noreferrer" className="inline-block hover:opacity-80 transition-opacity">
          <img src={googleReviewLogo} alt="Bekijk onze Google reviews" className="h-16 md:h-20 w-auto" />
        </a>
      </div>
    </section>

    {/* Over ons */}
    <section id="over-ons" className="bg-slate-50 pt-8 md:pt-12 pb-12 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <div className="grid md:grid-cols-3 rounded-2xl md:rounded-3xl overflow-hidden gap-0 md:gap-0">
            {[
              {
                title: 'Professionele schilder',
                text: 'Dankzij de ruime ervaring weten wij hoe we de wensen van de klant kunnen uitvoeren.',
              },
              {
                title: 'Kwaliteit',
                text: 'We werken met klasse-1-materialen om onze kwaliteit te waarborgen.',
              },
              {
                title: 'Snelle service',
                text: 'Wordt de opleverdatum niet gehaald? Geen zorgen, wij lossen het naar tevredenheid op.',
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="bg-white p-6 md:p-8 shadow-sm transition duration-200 hover:bg-[#e0f7ff] hover:shadow-lg"
                data-feature-index={idx}
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-[#b8f440]" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
                    <path
                      fillRule="evenodd"
                      d="M19.03 7.97a.75.75 0 00-1.06-1.06L10 14.88l-3.97-3.97a.75.75 0 00-1.06 1.06l4.5 4.5a.75.75 0 001.06 0l8.5-8.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm md:text-base text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Leverancier Logo's */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">
            Kwaliteits producten waar wij mee werken
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-6 items-center justify-items-center">
            <div className="relative group cursor-pointer">
              <img src={sigmaLogo} alt="Sigma leverancier" className="h-10 w-auto md:h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-[#e0f7ff] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center rounded-lg">
                <span className="text-slate-900 font-semibold text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center px-2">
                  Sigma Coatings
                </span>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img src={renovaidLogo} alt="Renovaid leverancier" className="h-10 w-auto md:h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-[#e0f7ff] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center rounded-lg">
                <span className="text-slate-900 font-semibold text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center px-2">
                  Renovaid
                </span>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img src={veveoLogo} alt="Veveo leverancier" className="h-10 w-auto md:h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-[#e0f7ff] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center rounded-lg">
                <span className="text-slate-900 font-semibold text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center px-2">
                  Veveo
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 rounded-2xl md:rounded-3xl overflow-hidden">
          <div className="relative w-full border border-slate-200 md:border-r-0 rounded-t-2xl md:rounded-l-2xl md:rounded-r-none rounded-b-none md:rounded-b-2xl overflow-hidden">
            <img
              src={paintedInterior}
              alt="Professioneel schilderwerk"
              className="w-full h-full max-h-[300px] md:max-h-[450px] object-cover"
            />
          </div>
          <div className="bg-white border border-slate-200 md:border-l-0 rounded-b-2xl md:rounded-r-2xl md:rounded-l-none rounded-t-none md:rounded-t-2xl p-4 md:p-6 flex flex-col justify-center min-h-[300px] md:min-h-[450px] transition-colors hover:bg-[#e0f7ff]">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-left pl-0 md:pl-6">Waarom Koopman Schilderwerken?</h3>
            <ul className="space-y-2 md:space-y-3 text-slate-700 text-base md:text-lg pl-0 md:pl-6">
              {[
                'Vrijblijvende offerte en advies',
                'Vakkundige uitvoering',
                '8 jaar ervaring in het schildervak',
                'Service en Garantie',
                'Nette en schone oplevering',
                'Lokale schilder uit Twente',
              ].map((item) => (
                <li key={item} className="flex items-center justify-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#b8f440] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
                    <path
                      fillRule="evenodd"
                      d="M19.03 7.97a.75.75 0 00-1.06-1.06L10 14.88l-3.97-3.97a.75.75 0 00-1.06 1.06l4.5 4.5a.75.75 0 001.06 0l8.5-8.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Instagram reel/post boven werkzaamheden */}
    {/* Vervang de embedUrl hieronder door de exacte embed-link van jouw reel of post.
        Ga in Instagram naar de post → Delen → Insluiten → kopieer de URL die eindigt op /embed */}
    <InstagramEmbed
      title="Bekijk ook onze instagram pagina"
    />

    {/* Werkzaamheden */}
    <section id="werkzaamheden" className="py-20 bg-slate-50">
      <div className="px-4 w-full">
        <h2 className="text-3xl font-bold text-center mb-12">Onze werkzaamheden</h2>
        <div className="space-y-0">
          {[
            {
              title: serviceIntros.schilderwerk.title,
              description: serviceIntros.schilderwerk.intro,
              image: schilderwerkImage,
              to: '/schilderwerk',
            },
            {
              title: serviceIntros.houtrot.title,
              description: serviceIntros.houtrot.intro,
              image: houtrotImage,
              to: '/houtrot-reparatie',
            },
            {
              title: serviceIntros.glaszetten.title,
              description: serviceIntros.glaszetten.intro,
              image: glaszettenImage,
              to: '/glaszetten',
            },
            {
              title: serviceIntros.timmerwerk.title,
              description: serviceIntros.timmerwerk.intro,
              image: timmerwerkImage,
              to: '/timmerwerk',
            },
            {
              title: serviceIntros.reparatiewerk.title,
              description: serviceIntros.reparatiewerk.intro,
              image: reparatieImage,
              to: '/reparatiewerk',
            },
          ].map((service, index) => {
            const isOdd = index % 2 === 1;
            const isFirst = index === 0;
            const isLast = index === 4;
            
            return (
              <article
                key={service.to}
                className={`grid md:grid-cols-2 bg-white border-x border-slate-200 w-full ${
                  isFirst ? 'rounded-t-3xl border-t' : 'border-t'
                } ${
                  isLast ? 'rounded-b-3xl border-b' : ''
                } ${
                  isOdd ? 'md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1' : ''
                }`}
              >
                <div className="overflow-hidden bg-slate-100 h-72 md:h-80">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-6 flex flex-col justify-center items-center text-center transition-colors hover:bg-[#e0f7ff]">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                  <Link
                    to={service.to}
                    className="inline-flex items-center rounded-full bg-[#91e5ff] text-slate-900 font-semibold px-5 py-2 text-sm hover:bg-[#7fdcff] transition-colors"
                  >
                    Lees meer…
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {/* Onze projecten */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Onze projecten</h2>
        <div className="relative">
          {/* Scroll-buttons op desktop */}
          <button
            type="button"
            onClick={() => scrollCarousel('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
            aria-label="Vorige projecten"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollCarousel('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
            aria-label="Volgende projecten"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 md:px-10"
          >
            {projects.map((project, index) => (
              <button
                key={index}
                data-project-index={index}
                onClick={() => {
                  setSelectedProject(index);
                  setSelectedImageIndex(0);
                }}
                className={`group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transition-all duration-700 ease-out snap-start min-w-[260px] md:min-w-[320px] lg:min-w-[360px] ${
                  visibleProjects[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: visibleProjects[index] ? `${index * 150}ms` : '0ms',
                }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                {project.images.length > 1 && (
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {project.images.length} foto's
                  </div>
                )}
              </button>
            ))}
          </div>
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
                  
                  <Link
                    to="/projecten"
                    className="inline-flex items-center rounded-full bg-[#91e5ff] text-slate-900 font-semibold px-5 py-2 text-sm hover:bg-[#7fdcff] transition-colors mt-4"
                    onClick={() => {
                      setSelectedProject(null);
                      setSelectedImageIndex(0);
                    }}
                  >
                    Bekijk alle projecten
                  </Link>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>

    <FloatingContactButtons />
    <Footer />
  </div>
  );
};

export default Home;