import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import glaszettenImage from '@/assets/glaszetten.webp';

const Glaszetten = () => (
  <div className="bg-white text-slate-900">
    <Header />
    <main className="pt-24 pb-20">
      <section className="container mx-auto px-4 max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 mb-3">Diensten</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Glaszetten</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-8 max-w-3xl">
          Van enkel glas naar HR++ of veiligheidsglas: wij vervangen of plaatsen glas snel en netjes, inclusief het herstellen van
          glaslatten en het afwerken van kitnaden.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-700">
              We meten nauwkeurig in, verwijderen het oude glas en plaatsen direct het nieuwe glas om deze vervolgens af te werken met glaslatten die de duurzaamheid van het schilderwerk bevorderen. Dankzij ons glasservice verbetert het comfort in huis.
            </p>
            <ul className="space-y-3 text-slate-700 list-disc list-inside">
              <li>HR++, veiligheidsglas, figuurglas en monumentenglas</li>
              <li>Vervanging van glaslatten en herstel van kitnaden</li>
              <li>Strakke afwerking met duurzame beglazingskit</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/offerte" className="px-6 py-3 bg-[#91e5ff] text-slate-900 font-semibold rounded-full text-center hover:bg-[#7fdcff] transition-colors">
                Offerte glaszetten
              </a>
              <a href="tel:+31626046159" className="px-6 py-3 bg-[#91e5ff] text-slate-900 font-semibold rounded-full text-center hover:bg-[#7fdcff] transition-colors">
                Neem contact op
              </a>
            </div>
          </div>
          <img src={glaszettenImage} alt="Glaszetten" className="rounded-3xl shadow-xl w-full object-cover" />
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl mt-16 grid md:grid-cols-3 gap-6">
        {[
          'Vervangen van enkelglas voor isolatieglas',
          'Renovatie van bestaande kozijnen',
          'Schadeherstel na breuk of inbraak',
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 p-6 shadow-sm text-slate-700">
            {item}
          </div>
        ))}
      </section>
    </main>
    <FloatingContactButtons />
    <Footer />
  </div>
);

export default Glaszetten;

