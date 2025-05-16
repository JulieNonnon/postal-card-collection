<template>
  <div v-if="card">
    <h1>🌱{{ card.title }}🌱</h1>
    <img :src="card.image" :alt="card.title" />
    <h3><strong>🗓️Date :</strong> {{ card.date }}</h3>
    <h3><strong>📍Lieu :</strong> {{ card.location }}</h3>
  </div>
  <div v-else>
    <p>Carte introuvable 🫤</p>
  </div>
  <ButtonComponent label="Retour à la collection" to="/collection" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { postalCards, PostalCard } from "@/mock/postalcard.mock";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default defineComponent({
  name: "PostalCardDetail",
  components: {
    ButtonComponent,
  },
  setup() {
    const route = useRoute();
    const id = Number(route.params.id); // assure qu'on a un nombre

    const card = computed<PostalCard | undefined>(() =>
      postalCards.find((c) => c.id === id)
    );

    return { card };
  },
});
</script>

<style scoped>
h1,
h3 {
  text-align: center;
  margin-bottom: 2rem;
  font-family: Calibri;
}
img {
  padding: 0 20%;
  max-width: 60%;
  height: auto;
  margin: 1rem 0;
}

@media (max-width: 600px) {
  img {
    padding: 0 5%;
    max-width: 90%;
    margin: auto;
  }
}
</style>
