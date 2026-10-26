import { useState } from 'react';
import filmsData from './data/films.json';
import FilterBar from './components/FilterBar';
import FilmCard from './components/FilmCard';
import ReservationForm from './components/ReservationForm';

function App() {
  const [vueCourante, setVueCourante] = useState('accueil'); 
  const [filtreGenre, setFiltreGenre] = useState('Tous');
  const [filtreVostfr, setFiltreVostfr] = useState(false);

  const filmsFiltres = filmsData.filter(film => {
    const correspondGenre = filtreGenre === 'Tous' || film.genre === filtreGenre;
    const correspondVersion = filtreVostfr ? film.version === 'VOSTFR' : true;
    return correspondGenre && correspondVersion;
  });

  return (
    <div className="min-h-screen p-6 font-sans">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-black text-[var(--color-rouge-velours)] tracking-tight mb-6">
          L'Étoile Rémoise
        </h1>
        <nav className="flex justify-center gap-4">
          <button 
            onClick={() => setVueCourante('accueil')} 
            className={`px-6 py-2.5 rounded-xl font-bold transition-all min-h-[44px] ${
              vueCourante === 'accueil' 
                ? 'bg-[var(--color-rouge-velours)] text-white shadow-md' 
                : 'bg-white text-[var(--color-noir-anthracite)] border border-[var(--color-bordure)] hover:border-[var(--color-rouge-velours)]'
            }`}
          >
            Accueil
          </button>
          <button 
            onClick={() => setVueCourante('films')} 
            className={`px-6 py-2.5 rounded-xl font-bold transition-all min-h-[44px] ${
              vueCourante === 'films' 
                ? 'bg-[var(--color-rouge-velours)] text-white shadow-md' 
                : 'bg-white text-[var(--color-noir-anthracite)] border border-[var(--color-bordure)] hover:border-[var(--color-rouge-velours)]'
            }`}
          >
            À l'affiche
          </button>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto">
        {vueCourante === 'accueil' && (
          <section className="text-center py-16 bg-white rounded-3xl p-8 shadow-sm border border-[var(--color-bordure)]">
            <h2 className="text-3xl font-black mb-4 text-[var(--color-noir-anthracite)]">Votre cinéma indépendant à Reims</h2>
            <p className="mb-8 text-[var(--color-texte-gris)] text-lg max-w-2xl mx-auto">
              Découvrez notre sélection de films d'auteur et de classiques en version originale.
            </p>
            <button 
              onClick={() => setVueCourante('films')} 
              className="px-8 py-4 bg-[var(--color-rouge-velours)] text-white font-bold rounded-xl text-lg hover:bg-[var(--color-rouge-hover)] transition-all shadow-md focus:ring-4 focus:ring-red-200"
            >
              Voir les séances
            </button>
          </section>
        )}

        {vueCourante === 'films' && (
          <section>
            <FilterBar 
              genreActif={filtreGenre} 
              setGenreActif={setFiltreGenre} 
              vostfrUniquement={filtreVostfr} 
              setVostfrUniquement={setFiltreVostfr} 
            />
            
            {filmsFiltres.length === 0 ? (
              <div className="p-10 text-center border-2 border-dashed border-gray-300 bg-white rounded-2xl">
                <p className="text-lg text-[var(--color-texte-gris)] font-medium">Aucun film ne correspond à votre recherche.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filmsFiltres.map(film => (
                  <FilmCard key={film.id} film={film} onReserver={() => setVueCourante('reservation')} />
                ))}
              </div>
            )}
          </section>
        )}

        {vueCourante === 'reservation' && (
          <ReservationForm onAnnuler={() => setVueCourante('films')} />
        )}
      </main>
    </div>
  );
}

export default App;