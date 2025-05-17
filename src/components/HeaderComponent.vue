<template>
  <header class="header">
    
    <!-- Bouton Burger -->
    <button class="burger" @click="toggleMenu"> ☰ </button>
    <nav :class="{ open: isMenuOpen }">
      <!-- menu -->
      <router-link to="/" class="nav-link" @click="closeMenu">🌺Accueil</router-link>
      <router-link to="/collection" class="nav-link" @click="closeMenu">🌺Cartes Postales</router-link>
    </nav>
    <!-- barre de recherche -->
    <form @submit.prevent="handleSearch">
      <input
        type="text"
        :value="searchInput"
        @input="onInput"
        placeholder="Rechercher une carte..."
      />
      <button @click="search" class="searchButton" type="submit">🔍</button>
    </form>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
//import { store } from "@/store";
import { useSearchStore } from '@/store/searchStore';

export default defineComponent({
  name: "HeaderComponent",
  setup() {
    const isMenuOpen = ref(false)
    const searchStore = useSearchStore();
    const router = useRouter();

    const onInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      searchStore.updateInput(target.value);
    };

    const search = () => {
      searchStore.commitSearch();
      router.push({ name: 'Collection' }); // Navigue vers la page des résultats
    };

    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value
    }

    function closeMenu() {
      isMenuOpen.value = false
    }

    return {
      searchInput: searchStore.searchInput,
      isMenuOpen,
      toggleMenu,
      closeMenu,
      onInput,
      search,
    };
  },
});
</script>

<style scoped>
.header {
  border: 5px red solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: mediumseagreen;
  padding: 1rem 0;
  /* margin: 0; */
  width: 100%;
  /* overflow-x: hidden; */
}
nav {
  display: flex;
  gap: 1rem;
  padding-left: 2%;
}
.nav-link {
  margin-right: 1rem;
  text-decoration: none;
  color: white;
  font-family: Calibri;
}
.nav-link.router-link-exact-active {
  font-weight: bold;
}
/* Burger button */
.burger {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}
/* Search */
input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  width: 60%;
}
button {
  background-color: mediumseagreen;
  border: 2px solid white;
  border-radius: 20px;
  margin-left: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
}

@media (max-width: 600px) {
  .burger {
    display: block;
  }

  nav {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: mediumseagreen;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    display: none;
  }

  nav.open {
    display: flex;
  }
}
</style>
