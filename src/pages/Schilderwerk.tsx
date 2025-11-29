import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import schilderwerkImage from '@/assets/2.webp';
import { serviceIntros } from '@/content/serviceIntros';

const Schilderwerk = () => (
  <div className="bg-white text-slate-900">
    <Header />
    <main className="pt-24 pb-20">
      <section className="container mx-auto px-4 max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 mb-3">Diensten</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{serviceIntros.schilderwerk.title}</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-8 max-w-3xl">
          {serviceIntros.schilderwerk.intro}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-700">
              Buitenschilderwerk krijgt te maken met slijtage en weersinvloeden. Daarom controleren we deuren en kozijnen grondig, repareren we
              beschadigingen en werken we in meerdere lagen op met professionele producten. Binnen zorgen we voor strakke lijnen, passend kleuradvies
              en een nette oplevering zonder rommel.
            </p>
            <ul className="space-y-3 text-slate-700 list-disc list-inside">
              <li>Voorbehandeling van deuren, kozijnen en gevelonderdelen</li>
              <li>Gebruik van klasse-1 verfproducten voor langdurige bescherming</li>
              <li>Kleur- en materiaaladvies op basis van uw interieur of gevel</li>
              <li>Strakke afwerking van plafonds, wanden, deuren en trappen</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/offerte" className="px-6 py-3 bg-[#91e5ff] text-slate-900 font-semibold rounded-full text-center hover:bg-[#7fdcff] transition-colors">
                Offerte schilderwerk
              </a>
              <a href="tel:+31626046159" className="px-6 py-3 bg-[#91e5ff] text-slate-900 font-semibold rounded-full text-center hover:bg-[#7fdcff] transition-colors">
                Bel voor advies
              </a>
            </div>
          </div>
          <img src={schilderwerkImage} alt="Schilderwerk" className="rounded-3xl shadow-xl w-full object-cover" />
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl mt-16 grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Binnen',
            text: 'Wanden, plafonds, deuren en kozijnen met een strakke finish en kleuradvies dat past bij uw interieur.',
          },
          {
            title: 'Buiten',
            text: 'Volledige onderhoudsbeurten inclusief schuren, repareren, gronden en aflakken met garantie.',
          },
          {
            title: 'Projecten',
            text: 'Van enkele ruimtes tot complete woningen. Heldere planning en oplevering zonder verrassingen.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-slate-600">{item.text}</p>
          </div>
        ))}
      </section>
    </main>
    <FloatingContactButtons />
    <Footer />
  </div>
);

export default Schilderwerk;

