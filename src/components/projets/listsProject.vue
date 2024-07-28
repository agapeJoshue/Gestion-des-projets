<template>
  <div class="listes">
    <card-vue
      projectName="Hello Archi"
      description="Plateforme de mise en relation entre architecte / entreprise et porteur de projet."
      message="BONJOUR"
    />
    <card-vue
      projectName="Gestion des projets"
      description="Plateforme de mise en relation entre architecte / entreprise et porteur de projet."
      message="BONJOUR"
    />
    <card-vue
      projectName="Gestion des notes ENI"
      description="Plateforme de mise en relation entre architecte / entreprise et porteur de projet."
      message="BONJOUR"
    />
    <card-vue
      projectName="Gestion de reservation du train"
      description="Plateforme de mise en relation entre architecte / entreprise et porteur de projet."
      message="BONJOUR"
    />
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