import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import reparatieImage from '@/assets/stucwerk en spacwerk.webp';

const Reparatiewerk = () => (
  <div className="bg-white text-slate-900">
    <Header />
    <main className="pt-24 pb-20">
      <section className="container mx-auto px-4 max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 mb-3">Diensten</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Reparatiewerk</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-8 max-w-3xl">
          Beschadigd stuc- of pleisterwerk, lekkende goten of problemen met afwatering? Wij herstellen alles zorgvuldig zodat schilderwerk
          opnieuw strak kan worden aangebracht en beschermd blijft.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-700">
              Wij egaliseren wanden en plafonds, repareren scheuren en zorgen ervoor dat ondergronden weer sausklaar zijn. Buiten lossen we
              problemen aan goten, regenpijpen en loodslabben op zodat water geen kans krijgt om schade te veroorzaken.
            </p>
            <ul className="space-y-3 text-slate-700 list-disc list-inside">
              <li>Reparatie van stucwerk, pleisterlagen en gipsplaten</li>
              <li>Herstel van voegen, naden en kleine metselwerken</li>
              <li>Onderhoud aan goten, regenpijpen en daktrimmen</li>
              <li>Voorbereiding voor sausen of spuiten van wanden en plafonds</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/offerte" className="px-6 py-3 bg-[#91e5ff] text-slate-900 font-semibold rounded-full text-center hover:bg-[#7fdcff] transition-colors">
                Reparatie aanvragen
              </a>
              <a href="tel:+31626046159" className="px-6 py-3 bg-[#91e5ff] text-slate-900 font-semibold rounded-full text-center hover:bg-[#7fdcff] transition-colors">
                Direct contact
              </a>
            </div>
          </div>
          <img src={reparatieImage} alt="Reparatiewerk" className="rounded-3xl shadow-xl w-full object-cover" />
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl mt-16 grid md:grid-cols-3 gap-6">
        {[
          'Wanden en plafonds opnieuw sausklaar maken',
          'Schadeherstel na lekkage of verbouwing',
          'Onderhoud voor duurzame afwatering',
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

export default Reparatiewerk;

