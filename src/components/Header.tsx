import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Paintbrush } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Paintbrush className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-primary">KOOPMAN</h1>
            <p className="text-xs text-muted-foreground">Schilderwerken</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`transition-colors ${
              isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
            }`}
          >
            Home
          </Link>
          <Link
            to="/over-ons"
            className={`transition-colors ${
              isActive('/over-ons') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
            }`}
          >
            Over ons
          </Link>
          <Link
            to="/werkzaamheden"
            className={`transition-colors ${
              isActive('/werkzaamheden') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
            }`}
          >
            Werkzaamheden
          </Link>
          <Link
            to="/projecten"
            className={`transition-colors ${
              isActive('/projecten') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
            }`}
          >
            Projecten
          </Link>
          <Link
            to="/offerte"
            className={`transition-colors ${
              isActive('/offerte') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
            }`}
          >
            Offerte
          </Link>
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
            <Link
              to="/"
              onClick={closeMenu}
              className={`block w-full text-left transition-colors ${
                isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/over-ons"
              onClick={closeMenu}
              className={`block w-full text-left transition-colors ${
                isActive('/over-ons') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Over ons
            </Link>
            <Link
              to="/werkzaamheden"
              onClick={closeMenu}
              className={`block w-full text-left transition-colors ${
                isActive('/werkzaamheden') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Werkzaamheden
            </Link>
            <Link
              to="/projecten"
              onClick={closeMenu}
              className={`block w-full text-left transition-colors ${
                isActive('/projecten') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Projecten
            </Link>
            <Link
              to="/offerte"
              onClick={closeMenu}
              className={`block w-full text-left transition-colors ${
                isActive('/offerte') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Offerte
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;