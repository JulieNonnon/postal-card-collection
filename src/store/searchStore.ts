// Note : avec pinia, chaque defineStore crée un store isolé et modulaire.
// Celui là est spécifique à la fonctionnalité search, au lieu de mettre tous les stores dans un seul et même fichier index.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSearchStore = defineStore('search', () => {
  const searchInput = ref('');
  const searchQuery = ref('');

  function updateInput(value: string) {
    searchInput.value = value;
  }

  function commitSearch() {
    searchQuery.value = searchInput.value;
  }

  return {
    searchInput,
    searchQuery,
    updateInput,
    commitSearch,
  };
});

