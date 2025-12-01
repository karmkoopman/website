import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import timmerwerkImage from '@/assets/boeideel.webp';

const Timmerwerk = () => (
  <div className="bg-white text-slate-900">
    <Header />
    <main className="pt-24 pb-20">
      <section className="container mx-auto px-4 max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 mb-3">Diensten</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Timmerwerk</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-8 max-w-3xl">
          Van het vervangen van boeidelen en kozijnreparaties tot het monteren van raamdecoratie: wij verzorgen het timmerwerk
          dat nodig is om schilderprojecten helemaal af te ronden.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-700">
              We vervangen rotte delen, passen deuren aan en plaatsen nieuwe delen zodat alles weer sluit en beschermt zoals het hoort.
              Ook binnen helpen we met het leggen van vloeren, afwerking van verlichting en raamdecoratie zodat uw project echt af is.
            </p>
            <ul className="space-y-3 text-slate-700 list-disc list-inside">
              <li>Vervangen van boeidelen, windveren en dakranden</li>
              <li>Herstel of vervanging van kozijn- en deelelementen</li>
              <li>Aanpassen en afhangen van deuren en ramen</li>
              <li>Servicewerk zoals plinten, vloeren en afmontage</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/offerte" className="px-6 py-3 bg-[#91e5ff] text-slate-900 font-semibold rounded-full text-center hover:bg-[#7fdcff] transition-colors">
                Vraag timmerwerk aan
              </a>
              <a href="tel:+31626046159" className="px-6 py-3 bg-[#91e5ff] text-slate-900 font-semibold rounded-full text-center hover:bg-[#7fdcff] transition-colors">
                Bespreek de mogelijkheden
              </a>
            </div>
          </div>
          <img src={timmerwerkImage} alt="Timmerwerk" className="rounded-3xl shadow-xl w-full object-cover" />
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl mt-16 rounded-3xl bg-slate-50 border border-slate-100 p-8">
        <h2 className="text-2xl font-semibold mb-4">Perfect als voorbereiding op schilderwerk</h2>
        <p className="text-slate-700">
          Door timmerwerk en schilderwerk te combineren hoeven er minder partijen over de vloer te komen. We stemmen alles op elkaar af,
          waardoor de planning korter wordt en we kunnen opleveren.
        </p>
      </section>
    </main>
    <FloatingContactButtons />
    <Footer />
  </div>
);

export default Timmerwerk;

