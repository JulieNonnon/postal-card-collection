<template>
  <div class="postal-card-preview" @click="goToDetail">
    <img :src="card.image" :alt="card.title" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PostalCard } from "@/mock/postalcard.mock";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PostalCardPreviewComponent",
  props: {
    card: {
      type: Object as () => PostalCard,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const goToDetail = () => {
      router.push({ name: "Detail", params: { id: String(props.card.id) } });
    };

    return { goToDetail };
  },
});
</script>

<style scoped>
.postal-card-preview {
  border: none;
  max-width: 100%;
  padding: 1rem;
  margin: auto;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.postal-card-preview:hover {
  transform: scale(1.03);
}
img {
  max-width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 600px) {
  .postal-card-preview {
    padding: 0.6rem;
  }
}
</style>
