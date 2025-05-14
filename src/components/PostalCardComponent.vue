<template>
  <div class="postal-card" @click="goToDetail">
    <img :src="card.image" :alt="card.title" />
    <h2>{{ card.title }}</h2>
    <p>{{ card.date }} - {{ card.location }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PostalCard } from "@/mock/postalcard.mock";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PostalCardComponent",
  props: {
    card: {
      type: Object as () => PostalCard,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const goToDetail = () => {
      router.push({ name: "Detail", params: { id: props.card.id } });
    };

    return { goToDetail };
  },
});
</script>

<style scoped>
.postal-card {
  border: 1px solid #ccc;
  max-width: 30%;
  padding: 1rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: background-color 0.3s;
}
.postal-card:hover {
  background-color: #f0f8ff;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
