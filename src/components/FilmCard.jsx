export default function FilmCard({ film, onReserver }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full border border-[var(--color-bordure)] transition-all hover:shadow-md hover:-translate-y-1">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-3 gap-2">
          <h3 className="text-2xl font-black tracking-tight text-[var(--color-noir-anthracite)] leading-tight">{film.titre}</h3>
          <span className="px-3 py-1 bg-stone-100 text-[var(--color-rouge-velours)] text-xs font-bold rounded-full uppercase tracking-wider border border-red-100">
            {film.version}
          </span>
        </div>
        <p className="text-sm text-[var(--color-texte-gris)] mb-4 font-medium">De {film.realisateur} • {film.genre}</p>
        <p className="text-stone-700 mb-6 leading-relaxed text-sm">{film.synopsis}</p>
        
        <div>
          <h4 className="text-xs font-bold uppercase text-[var(--color-texte-gris)] tracking-wider mb-2">Séances à l'affiche :</h4>
          <div className="flex flex-wrap gap-2">
            {film.horaires.map(heure => (
              <span key={heure} className="px-3 py-1.5 border border-stone-200 rounded-lg text-sm bg-stone-50 text-[var(--color-noir-anthracite)] font-bold">
                {heure}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-0 mt-auto">
        <button 
          onClick={onReserver}
          className="w-full py-3.5 bg-[var(--color-rouge-velours)] text-white font-bold rounded-xl hover:bg-[var(--color-rouge-hover)] min-h-[44px] focus:ring-4 focus:ring-red-200 transition-all shadow-sm"
        >
          Réserver une place
        </button>
      </div>
    </article>
  );
}