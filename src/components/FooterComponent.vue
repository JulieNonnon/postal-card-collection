<template>
  <footer class="footer">
    <nav>
      <router-link to="/" class="nav-link">Accueil</router-link>
      <router-link to="/collection" class="nav-link">Cartes Postales</router-link>
    </nav>
    <p>Made with 🌺🌼🌷🌻🌹🪻🌸🏵️ by Julie</p>
    <p>
      © 2021 Niantic, Inc., Pikmin and Mii Characters / Artwork / Music © 2021
      Nintendo All Rights Reserved.
    </p>
  </footer>
</template>

<script lang="ts">
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background-color: mediumseagreen;
  padding: 1rem;
  margin: 0;
}
.nav-link,
p {
  margin-right: 1rem;
  text-decoration: none;
  color: white;
  font-family: Calibri;
}
.nav-link.router-link-exact-active {
  font-weight: bold;
}
p {
  text-align: center;
  font-size: small;
}

@media (max-width: 600px) {
  nav {
    padding: 3%;
  }
  p {
    padding: 1%;
  }
}
</style>
