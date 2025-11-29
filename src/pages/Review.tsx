import { useEffect } from 'react';
import Footer from '@/components/Footer';

const Review = () => {
  const googleSearchUrl = 'https://www.google.com/search?client=firefox-b-d&sca_esv=07554c39a11eae0c&sxsrf=AE3TifMXxsFjGAHpjc2vved2m_IOt48BHA:1758440168351&q=koopman+schilderwerken+reviews&uds=AOm0WdE2fekQnsyfYEw8JPYozOKzJEnG8H45ZApei5mhX2CkABEJSNEZPbwG-cYh5BHNYRH8G2jZD11TvxDKshmcg6qia8xmUgXMaaOm0O9Yky5cGQjbu9TS926sSYYfT8aDIh9RPer5jb1tE5Zu6hrcOcrJx98IASGJfA7raB8Oyn0jIvFJ7So&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwnxJ0bH6xTqO5We3IIJhaNxU634gncE1ZWixXpjU7nYRvsgbsGm54vnc0AgXPyGcyGxWa_mp-_zToQzMIWdn3I8n1W9bT52w2-ENAfA_8MZ0XXwDg%3D%3D&sa=X&ved=2ahUKEwiUsd-MrOmPAxVB_7sIHaBRLDQQxKsJKAV6BAh1EAE&ictx=1&biw=1280&bih=607&dpr=1.5';

  useEffect(() => {
    // Redirect to Google search for Koopman Schilderwerken reviews
    window.location.href = googleSearchUrl;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          Bezig met doorverwijzen...
        </h1>
        <p className="text-gray-600 mb-4">
          U wordt doorverwezen naar onze Google reviews.
        </p>
        <p className="text-sm text-gray-500">
          Als u niet automatisch wordt doorverwezen, 
          <a 
            href={googleSearchUrl}
            className="text-blue-600 hover:text-blue-800 underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            klik hier
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Review;
