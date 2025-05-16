<template>
  <router-link :to="to">
    <button>
      {{ label }}
    </button>
  </router-link>
</template>

<script lang="ts">
export default {
  name: "ButtonComponent",
  props: {
    label: {
      type: String,
      required: true,
    },
    to: {
      type: [String, Object],
      required: true,
    },
  },
};
</script>

<style scoped>
button {
  background-color: mediumseagreen;
  margin: 5% 35%;
  width: 30%;
  border-radius: 20px;
  border: none;
  padding: 2%;
  color: white;
  font-size: medium;
  transition: transform 0.2s ease;
  cursor: pointer;
}
button:hover {
  transform: scale(1.03);
}


@media (max-width: 600px) {
  button {
    width: 50%;
    margin: 5% 25%;
  }
}
</style>
