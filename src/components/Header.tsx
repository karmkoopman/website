import { useState } from 'react';
import { Menu, X, Paintbrush } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Paintbrush className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-primary">KOOPMAN</h1>
            <p className="text-xs text-muted-foreground">Schilderwerken</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('over-ons')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Over ons
          </button>
          <button
            onClick={() => scrollToSection('werkzaamheden')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Werkzaamheden
          </button>
          <button
            onClick={() => scrollToSection('projecten')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Projecten
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Offerte
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('over-ons')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Over ons
            </button>
            <button
              onClick={() => scrollToSection('werkzaamheden')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Werkzaamheden
            </button>
            <button
              onClick={() => scrollToSection('projecten')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Projecten
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Offerte
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;