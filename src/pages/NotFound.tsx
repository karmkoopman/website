import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FloatingContactButtons from '@/components/FloatingContactButtons';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 mb-3">Pagina niet gevonden</p>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default NotFound;
