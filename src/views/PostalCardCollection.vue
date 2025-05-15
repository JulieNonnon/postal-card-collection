<template>
  <div>
    <h1>Collection de cartes postales</h1>
    <h2>Sélectionner une carte pour consulter ses informations</h2>

    <!-- Select de filtre -->
    <div class="filterArea">
      <label for="filter">Filtrer par lieu :</label>
      <select v-model="selectedLocation" id="filter">
        <option value="">Tous les lieux</option>
        <option
          v-for="location in uniqueLocations"
          :key="location"
          :value="location"
        >
          {{ location }}
        </option>
      </select>
    </div>

    <!-- Message si aucune carte trouvée -->
    <div v-if="filteredCards.length === 0" class="no-results">
      Aucun résultat trouvé 👀
    </div>

    <!-- Bouton pour réinitialiser une recherche -->
    <div class="actions">
      <ButtonComponent class="actionButton" label="Réinitialiser" :onClick="resetFilters" />
    </div>

    <!-- Grille de cartes postales -->
    <div class="postal-card-section">
      <PostalCardPreviewComponent
        v-for="card in filteredCards"
        :key="card.id"
        :card="card"
      />
    </div>
    <ButtonComponent label="Retour à l'accueil" to="/" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { postalCards, PostalCard } from "@/mock/postalcard.mock";
import PostalCardPreviewComponent from "@/components/PostalCardPreviewComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
//import { store } from "@/store";
import { useSearchStore } from '@/store/searchStore';

export default defineComponent({
  components: { PostalCardPreviewComponent, ButtonComponent, },
  setup() {
    const cards = ref<PostalCard[]>(postalCards);
    const selectedLocation = ref<string>("");
    const searchStore = useSearchStore();

    // Liste des lieux uniques pour le menu déroulant
    const uniqueLocations = computed(() => {
      const locations = cards.value.map((card) => card.location);
      return [...new Set(locations)];
    });

    // 🔀 Filtrage combiné : lieu + recherche
    const filteredCards = computed(() =>
    cards.value.filter(card =>
      (!selectedLocation.value || card.location === selectedLocation.value) &&
      (!searchStore.searchQuery ||
        card.title.toLowerCase().includes(searchStore.searchQuery.toLowerCase()))
      )
    );

    // Reinitialisation de la recherche
    const resetFilters = () => {
      searchStore.searchQuery = '';
      searchStore.searchInput = '';
      selectedLocation.value = '';
    };

    return {
      cards,
      selectedLocation,
      uniqueLocations,
      filteredCards,
      resetFilters,
    };
  },
});
</script>

<style scoped>
h1,
h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-family: Calibri;
}
.filterArea {
  text-align: center;
}
label {
  margin-right: 2%;
}
.postal-card-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes égales */
  gap: 1rem; /* espacement entre les cartes */
  padding: 1rem;
}
.no-results {
  text-align: center;
  color: #999;
  margin-top: 2rem;
}
.actionButton {
  padding: 0;
  width: 15%;
  margin: 2% 45%;
  font-size: smaller;
}
</style>
