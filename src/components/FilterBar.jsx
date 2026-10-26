export default function FilterBar({ genreActif, setGenreActif, vostfrUniquement, setVostfrUniquement }) {
  const genres = ['Tous', 'Drame', 'Thriller', 'Fantastique', 'Romance', 'Science-Fiction'];

  return (
    <div className="mb-8 p-5 bg-white rounded-2xl border border-[var(--color-bordure)] shadow-sm flex flex-col md:flex-row gap-6 items-center justify-between">
      <div className="flex flex-wrap gap-2">
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => setGenreActif(genre)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all min-w-[44px] min-h-[44px] ${
              genreActif === genre 
                ? 'bg-[var(--color-rouge-velours)] text-white shadow-sm' 
                : 'bg-stone-100 text-[var(--color-noir-anthracite)] hover:bg-stone-200'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
      
      <label className="flex items-center gap-3 cursor-pointer min-h-[44px] text-[var(--color-noir-anthracite)] select-none">
        <input 
          type="checkbox" 
          checked={vostfrUniquement} 
          onChange={(e) => setVostfrUniquement(e.target.checked)}
          className="w-5 h-5 accent-[var(--color-rouge-velours)] border-gray-300 rounded focus:ring-2 focus:ring-[var(--color-rouge-velours)]"
        />
        <span className="font-bold text-sm tracking-wide">VOSTFR uniquement</span>
      </label>
    </div>
  );
}