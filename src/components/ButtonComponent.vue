<template>
  <router-link to="/collection">
    <button>Découvrir les cartes trouvées à ce jour</button>
  </router-link>
</template>

<script lang="ts">
export default {
  name: "ButtonComponent",
};
</script>

<style scoped>
button {
  background-color: mediumseagreen;
  margin: 0 25%;
  width: 30%;
  border-radius: 20px;
  border: none;
  padding: 2%;
  color: white;
  font-size: large;
  transition: transform 0.2s ease;
  cursor: pointer;
}
button:hover {
  transform: scale(1.03);
}
</style>
