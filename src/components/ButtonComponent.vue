<template>
<!-- si une navigation est renseignée via to, alors le bouton utilise <router link> -->
<!-- si onClick est défini, le bouton effectuera l'action -->
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    @click="handleClick"
  >
    <button>
      {{ label }}
    </button>
  </component>
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
      default: null,
    },
    onClick: {
      type: Function,
      default: null,
    },
  },
  methods: {
    handleClick(event: Event) {
      if (this.$props.onClick) {
        event.preventDefault(); // évite navigation si clic = action
        this.$props.onClick();
      }
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
</style>

