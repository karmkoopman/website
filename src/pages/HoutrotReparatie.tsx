import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import houtrotImage from '@/assets/houtrot.webp';

const HoutrotReparatie = () => (
  <div className="bg-white text-slate-900">
    <Header />
    <main className="pt-24 pb-20">
      <section className="container mx-auto px-4 max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 mb-3">Diensten</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Houtrot reparatie</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-8 max-w-3xl">
          Houtrot zien we nooit over het hoofd. We onderzoeken de oorzaak, verwijderen aangetast hout en herstellen kozijnen en deuren met
          duurzame oplossingen zodat schilderwerk weer jarenlang meegaat.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-700">
              We frezen aangetaste delen uit en vullen ze met hoogwaardige tweecomponenten epoxy. Wanneer nodig vervangen we complete delen
              door nieuw hardhout dat we volledig in het bestaande werk integreren. Zo voorkomen we dat houtrot terugkomt.
            </p>
            <ul className="space-y-3 text-slate-700 list-disc list-inside">
              <li>Inspectie van oorzaken zoals lekkages of open verbindingen</li>
              <li>Duurzame reparaties met epoxy of nieuw hardhout</li>
              <li>Directe afwerking met grondverf en lak</li>
              <li>Advies voor onderhoud en ventilatie</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/offerte" className="px-6 py-3 bg-[#91e5ff] text-slate-900 font-semibold rounded-full text-center hover:bg-[#7fdcff] transition-colors">
                Plan een inspectie
              </a>
              <a href="tel:+31626046159" className="px-6 py-3 bg-[#91e5ff] text-slate-900 font-semibold rounded-full text-center hover:bg-[#7fdcff] transition-colors">
                Bel direct: 06-26046159
              </a>
            </div>
          </div>
          <img src={houtrotImage} alt="Houtrot reparatie" className="rounded-3xl shadow-xl w-full object-cover" />
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl mt-16 rounded-3xl bg-slate-50 border border-slate-100 p-8">
        <h2 className="text-2xl font-semibold mb-4">Veelvoorkomende reparaties</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'Onderdorpels en stijlen van kozijnen',
            'Deurlijsten, boeidelen en windveren',
            'Raamhoeken, glaslatten en houtverbindingen',
          ].map((item) => (
            <div key={item} className="p-4 rounded-2xl bg-white shadow-sm border border-slate-100 text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
    <FloatingContactButtons />
    <Footer />
  </div>
);

export default HoutrotReparatie;

