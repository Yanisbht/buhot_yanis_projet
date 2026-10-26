import Ticket from './Ticket';

export default {
  title: 'Composants/Ticket',
  component: Ticket,
  tags: ['autodocs'],
};

export const PleinTarif = {
  args: {
    type: 'plein',
    filmTitre: 'Dune : Deuxième Partie',
  },
};

export const TarifEtudiant = {
  args: {
    type: 'etudiant',
    filmTitre: 'Perfect Days',
  },
};

export const Pass5Places = {
  args: {
    type: 'pass',
    filmTitre: 'Le Règne Animal',
  },
};