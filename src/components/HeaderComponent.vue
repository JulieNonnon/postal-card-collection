<template>
  <header class="header">
    <nav>
      <!-- menu -->
      <router-link to="/" class="nav-link">🌺Accueil</router-link>
      <router-link to="/collection" class="nav-link"
        >🌺Cartes Postales</router-link
      >
    </nav>
    <!-- barre de recherche -->
    <form @submit.prevent="handleSearch">
      <input
        type="text"
        v-model="search"
        placeholder="Rechercher une carte..."
      />
      <button class="searchButton" type="submit">🔍</button>
    </form>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { store } from "@/store";

export default defineComponent({
  name: "HeaderComponent",
  setup() {
    const search = ref("");
    const router = useRouter();

    const handleSearch = () => {
      store.searchQuery = search.value;
      router.push("/collection"); // Redirige vers la collection
    };

    return { search, handleSearch };
  },
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: mediumseagreen;
  padding: 1rem;
  margin: 0;
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
input {
  padding: 0.5rem;
  border: 1px solid #ccc;
}
button {
  background-color: mediumseagreen;
  border: 2px solid white;
  border-radius: 20px;
  margin-left: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
}
</style>
