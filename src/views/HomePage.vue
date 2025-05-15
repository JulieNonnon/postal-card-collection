<template>
  <div>
    <h1>Archives de cartes postales Pikmin Bloom 📬</h1>
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
    <ButtonComponent label="Découvrir les cartes trouvées à ce jour" to="/collection" />
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
  font-family: Calibri;
}
button {
  background-color: mediumseagreen;
  margin: 5% 35%;
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
