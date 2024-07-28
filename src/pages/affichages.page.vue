<script>
import headerVue from "./header.vue";

export default {
  components: {
    headerVue,
  },
};
</script>
<template>
  <header-vue icon="ri-stack-line" title="Toutes les questions" :btnCreateLink="true" btnCreateLinkValue="Ajouter une vue" btnCreateLinkUrl="" />
</template>