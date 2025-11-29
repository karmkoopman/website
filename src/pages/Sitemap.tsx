import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Sitemap</h1>
          <p className="text-slate-600 mb-8">
            Overzicht van alle belangrijke pagina&apos;s op de website van Koopman Schilderwerken.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h2 className="font-semibold mb-3">Algemeen</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/over-ons" className="hover:underline">
                    Over ons
                  </Link>
                </li>
                <li>
                  <Link to="/werkzaamheden" className="hover:underline">
                    Werkzaamheden (overzicht)
                  </Link>
                </li>
                <li>
                  <Link to="/projecten" className="hover:underline">
                    Projecten
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:underline">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/offerte" className="hover:underline">
                    Offerte / contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-3">Werkzaamheden</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/schilderwerk" className="hover:underline">
                    Schilderwerk
                  </Link>
                </li>
                <li>
                  <Link to="/houtrot-reparatie" className="hover:underline">
                    Houtrot reparatie
                  </Link>
                </li>
                <li>
                  <Link to="/glaszetten" className="hover:underline">
                    Glaszetten
                  </Link>
                </li>
                <li>
                  <Link to="/timmerwerk" className="hover:underline">
                    Timmerwerk
                  </Link>
                </li>
                <li>
                  <Link to="/reparatiewerk" className="hover:underline">
                    Reparatiewerk
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-3">Overig</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/review" className="hover:underline">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="hover:underline">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default Sitemap;


