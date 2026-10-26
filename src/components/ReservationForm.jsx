import { useState } from 'react';

export default function ReservationForm({ onAnnuler }) {
  const [formData, setFormData] = useState({ nom: '', prenom: '', email: '', tarif: 'plein' });
  const [erreur, setErreur] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErreur('');
    
    if (!formData.nom || !formData.prenom || !formData.email) {
      setErreur('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    
    setConfirmation(true);
  };

  if (confirmation) {
    return (
      <div className="p-8 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-2xl text-center max-w-md mx-auto shadow-sm">
        <h2 className="text-2xl font-black mb-3 text-emerald-950">Réservation confirmée !</h2>
        <p className="text-emerald-800">Vos billets ont été envoyés à <span className="font-bold">{formData.email}</span>.</p>
        <button 
          onClick={onAnnuler} 
          className="mt-8 px-6 py-3 bg-emerald-800 text-white font-bold rounded-xl min-h-[44px] hover:bg-emerald-900 transition-colors shadow-sm"
        >
          Retour aux films
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-bordure)]">
      <h2 className="text-3xl font-black mb-8 text-[var(--color-rouge-velours)]">Réserver vos places</h2>
      
      {erreur && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 border-l-4 border-[var(--color-rouge-velours)] rounded-r-lg font-medium text-sm">
          {erreur}
        </div>
      )}

      <div className="mb-5">
        <label htmlFor="nom" className="block text-sm font-bold mb-2 text-[var(--color-noir-anthracite)]">Nom *</label>
        <input 
          type="text" 
          id="nom"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          className="w-full px-4 py-3 bg-stone-50 text-[var(--color-noir-anthracite)] border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-rouge-velours)] focus:bg-white min-h-[44px] transition-all"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="prenom" className="block text-sm font-bold mb-2 text-[var(--color-noir-anthracite)]">Prénom *</label>
        <input 
          type="text" 
          id="prenom"
          value={formData.prenom}
          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
          className="w-full px-4 py-3 bg-stone-50 text-[var(--color-noir-anthracite)] border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-rouge-velours)] focus:bg-white min-h-[44px] transition-all"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-bold mb-2 text-[var(--color-noir-anthracite)]">Adresse e-mail *</label>
        <input 
          type="email" 
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-stone-50 text-[var(--color-noir-anthracite)] border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-rouge-velours)] focus:bg-white min-h-[44px] transition-all"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="tarif" className="block text-sm font-bold mb-2 text-[var(--color-noir-anthracite)]">Choix du tarif</label>
        <select 
          id="tarif"
          value={formData.tarif}
          onChange={(e) => setFormData({ ...formData, tarif: e.target.value })}
          className="w-full px-4 py-3 bg-stone-50 text-[var(--color-noir-anthracite)] border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-rouge-velours)] focus:bg-white min-h-[44px] transition-all"
        >
          <option value="plein">Plein tarif (9€)</option>
          <option value="etudiant">Tarif étudiant (6€)</option>
          <option value="pass">Utiliser Pass 5 places</option>
        </select>
      </div>

      <div className="flex gap-4">
        <button 
          type="button" 
          onClick={onAnnuler}
          className="flex-1 py-3 bg-stone-100 text-stone-700 font-bold rounded-xl hover:bg-stone-200 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all"
        >
          Annuler
        </button>
        <button 
          type="submit" 
          className="flex-1 py-3 bg-[var(--color-rouge-velours)] text-white font-bold rounded-xl hover:bg-[var(--color-rouge-hover)] min-h-[44px] focus:outline-none focus:ring-4 focus:ring-red-200 transition-all shadow-sm"
        >
          Confirmer
        </button>
      </div>
    </form>
  );
}