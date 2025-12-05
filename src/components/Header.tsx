import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo1 from '@/assets/Logo1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const serviceLinks = [
    { label: 'Schilderwerk', to: '/schilderwerk' },
    { label: 'Houtrot reparatie', to: '/houtrot-reparatie' },
    { label: 'Glaszetten', to: '/glaszetten' },
    { label: 'Timmerwerk', to: '/timmerwerk' },
    { label: 'Reparatiewerk', to: '/reparatiewerk' },
  ];
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Logo and Navigation in one row */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-2 flex items-end justify-between">
          <Link to="/" className="flex items-center self-center">
          <img src={logo1} alt="Koopman Schilderwerken" className="h-14 w-auto object-contain" />
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
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
          <Link
            to="/werkzaamheden"
              className={`inline-flex items-center gap-2 transition-colors ${
                location.pathname.startsWith('/werkzaamheden') ||
                ['schilderwerk', 'houtrot-reparatie', 'glaszetten', 'timmerwerk', 'reparatiewerk'].some((slug) =>
                  location.pathname.startsWith(`/${slug}`)
                )
                  ? 'text-primary font-medium'
                  : 'text-foreground hover:text-primary'
            }`}
          >
            Werkzaamheden
              <span className={`text-xs transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}>▼</span>
            </Link>
            {isServicesOpen && (
              <div
                className="absolute left-0 top-full z-50 w-56 pt-2"
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                <div className="flex flex-col rounded-md border border-border bg-card shadow-lg">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsServicesOpen(false)}
                      className={`px-4 py-2 text-sm transition-colors block ${
                        isActive(link.to) ? 'bg-muted text-primary font-medium' : 'hover:bg-muted/70'
                      }`}
                    >
                      {link.label}
          </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            to="/projecten"
            className={`transition-colors ${
              isActive('/projecten') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
            }`}
          >
            Projecten
          </Link>
          <Link
            to="/portfolio"
            className={`transition-colors ${
              isActive('/portfolio') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
            }`}
          >
            Portfolio
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
            <details className="group">
              <summary
                className={`flex w-full cursor-pointer items-center justify-between py-2 text-left text-base transition-colors ${
                  isActive('/werkzaamheden') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
                }`}
              >
                Werkzaamheden
                <span className="text-sm text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="ml-4 mt-2 space-y-2 border-l border-border pl-4 text-sm">
            <Link
              to="/werkzaamheden"
              onClick={closeMenu}
                  className={`block transition-colors ${
                isActive('/werkzaamheden') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
                  Overzicht werkzaamheden
                </Link>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className={`block transition-colors ${
                      isActive(link.to) ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.label}
            </Link>
                ))}
              </div>
            </details>
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
              to="/portfolio"
              onClick={closeMenu}
              className={`block w-full text-left transition-colors ${
                isActive('/portfolio') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Portfolio
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