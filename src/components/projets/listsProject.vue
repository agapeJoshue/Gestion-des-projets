<template>
  <div class="listes">
    <card-vue projectName="Hello Archi"/>
    <card-vue projectName="Gestion des projets" />
    <card-vue projectName="Gestion des notes ENI" />
  </div>
</template>

<script>
import cardVue from "./card.vue";

export default {
  components: { cardVue },
};
</script>

<style scoped>
.listes {
  display: grid;
  gap: 1.5rem;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  margin-right: 2rem;
  padding: 2rem 0 1rem 2rem;
  overflow: overlay;
  max-height: 92vh;
}
.listes::-webkit-scrollbar {
  width: 0px;
}
</style>