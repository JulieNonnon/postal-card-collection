// Dossier Utils (utilities) = dossier de fonctions réutilisables, testées de façon isolée (indépendamment deVue ou du DOM)
// filterUtils.ts = logique métier extraite, l'extraire de son composant d'origine facilite les tests et la rend plus facile à réutiliser et à maintenir
// le TEST de la logique métier est réalisé dans le dossier test (au même niveau que src), c'est mieux de séparer les tests du code
// Il est conseillé de ne pas mélanger la logique métier avec l'affichage (composant)

// Test Unitaire de la fonctionnalité de filtrage sur la page PostalCardCollection

import type { PostalCard } from '@/mock/postalcard.mock';

export function filterByLocation(cards: PostalCard[], location: string): PostalCard[] {
  if (!location) return cards;
  return cards.filter(card => card.location === location);
}
