<template>
  <div>
    <h1>Collection de cartes postales Pikmin Bloom 📬</h1>
    <p>
      Pikmin Bloom est une application de marche à pied ludique inspirée de la
      licence Pikmin de Nintendo, rythmée par des évenements mensuels proposant
      de nombreux challenges, tels que faire pousser des fleurs, envoyer ses
      Pikmins combattre des champignons ou encore réaliser des objectifs de pas.
    </p>
    <p>
      Ce blog a pour but d'archiver mes cartes postales préférées reçues lors de
      mes promenades et autres défis !
    </p>

    <h2>Dernière carte postale ajoutée :</h2>
    <div class="latestCard">
      <PostalCardPreviewComponent :card="latestCard" />
    </div>

    <!-- <router-link to="/collection">
      <button>Découvrir les cartes trouvées à ce jour</button>
    </router-link> -->



    <ButtonComponent class="button" label="Découvrir les cartes trouvées à ce jour" to="/collection" />
    <div class="pikminLineup">
      <img class="whitepik" src="@/assets/pikmins/stamp-white.png" alt="image d'un pikmin blanc" style="width: 10%; height: 10%;">
      <img class="purplepik" src="@/assets/pikmins/stamp-purple.png" alt="image d'un pikmin violet" style="width: 9%; height: 9%;">  
      <img class="redpik" src="@/assets/pikmins/stamp-red.png" alt="image d'un pikmin rouge" style="width: 7%; height: 7%;">
      <img class="bluepik" src="@/assets/pikmins/stamp-blue.png" alt="image d'un pikmin bleu" style="width: 8%; height: 8%;">
      <img class="yellowpik" src="@/assets/pikmins/stamp-yellow.png" alt="image d'un pikmin jaune" style="width: 9.5%; height: 9.5%;">
      <img class="rocpik" src="@/assets/pikmins/stamp-roc.png" alt="image d'un pikmin roc" style="width: 11%; height: 11%;">
      <img class="wingpik" src="@/assets/pikmins/stamp-pink.png" alt="image d'un pikmin ailé" style="width: 8%; height: 8%;">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { postalCards } from "@/mock/postalcard.mock";
import PostalCardPreviewComponent from "@/components/PostalCardPreviewComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default defineComponent ({
  name: "HomePage",
  components: {
    ButtonComponent,
    PostalCardPreviewComponent,
  },
  setup() {
    const latestCard = computed(() => {
      return postalCards.reduce((latest, card) =>
        card.id > latest.id ? card : latest
      );
    });

    return { latestCard };
  },
});
</script>

<style scoped>
h1,
h2 {
  text-align: center;
  margin-bottom: 2rem;
  margin-left: 5%;
  margin-right: 5%;
  font-family: Calibri;
}

p {
  margin: 5%;
  text-align: justify;
  font-family: Calibri;
}

.latestCard {
  display: flex;
  justify-content: center;
  align-items: center;
}

.latestCard :deep(.postal-card-preview) { 
  /* Le sélecteur :deep() permet de cibler des éléments à l'intérieur du composant enfant (utile avec scoped). */
  transform: scale(1); /* réduit la taille du composant */
  max-width: 60%;
  padding: 0;
}

.pikminLineup {
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: end;
}

@media (max-width: 600px) {
  .pikminLineup {
    justify-content: center;
  }
}
</style>
