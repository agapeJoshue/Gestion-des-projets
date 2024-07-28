<script>
import backVue from "../back.vue";

export default {
  components: { backVue },
};
</script>

<template>
  <div>
    <back-vue ULR="/plane/projets" textAfficher="retour dans la listes"/>
    <h1>Ajouet un projet</h1>
  </div>
</template>

<style scoped>
</style>