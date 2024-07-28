<script>
import headerVue from "./header.vue";

export default {
  components: {
    headerVue,
  },
};
</script>
<template>
  <header-vue icon="ri-briefcase-3-line" title="Les projets" :btnCreateLink="true" btnCreateLinkValue="Ajouter Projet" btnCreateLinkUrl="/plane/projets/ajouter"/>
</template>