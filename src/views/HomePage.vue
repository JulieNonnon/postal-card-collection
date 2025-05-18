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
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "HomePage",
  components: {
    ButtonComponent,
  },
};
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
