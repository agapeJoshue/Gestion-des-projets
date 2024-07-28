<script>
import navbarVue from "../layouts/navbar.vue";

export default {
  components: { navbarVue },
  data() {
    return {
      itemNavigate: [
        { url: "/plane/affichages/tous-les-numeros", itemName: "Tous les numéros" },
        { url: "/plane/affichages/tâche-assigné", itemName: "Assigné" },
        { url: "/plane/affichages/créé-une-problème", itemName: "Créé" },
        { url: "/plane/affichages/souscrit", itemName: "Souscrit" },
      ],
    };
  },
};
</script>

<template lang="">
    <navbar-vue :navItem="itemNavigate"/>
    <router-view></router-view>
</template>