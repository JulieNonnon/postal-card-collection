// On appelle la logique métier de l'utilitaire filterUtils.ts pour la tester ici

import { filterByLocation } from '@/utils/filterUtils';

const mockCards = [
  { id: 1, image: 'toureiffel.jpg', title: 'Tour Eiffel', date: '2024-01-01', location: 'Paris' },
  { id: 2, image: 'vieuxport.jpg', title: 'Vieux Port', date: '2024-01-01', location: 'Marseille' },
  { id: 3, image: 'montmartre.jpg', title: 'Montmartre', date: '2024-01-01', location: 'Paris' }
];

describe('filterByLocation', () => {
  it('retourne toutes les cartes si aucun lieu n’est sélectionné', () => {
    const result = filterByLocation(mockCards, '');
    expect(result.length).toBe(3);
  });

  it('retourne uniquement les cartes correspondant à un lieu donné', () => {
    const result = filterByLocation(mockCards, 'Paris');
    expect(result.length).toBe(2);
    expect(result.every(card => card.location === 'Paris')).toBe(true);
  });

  it('retourne un tableau vide si aucune carte ne correspond', () => {
    const result = filterByLocation(mockCards, 'Lyon');
    expect(result).toEqual([]);
  });
});

/*
⚠️ Bien faire la distinction entre les différents environnements de tests :

🔸src/utils/	    Fonctions réutilisables, logiques isolées	                filterUtils.ts
🔹tests/unit/	    Tests unitaires sur fonctions ou composants individuels	    filterUtils.spec.ts

*/
