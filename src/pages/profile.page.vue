<script>
import headerVue from "./header.vue";

export default {
  components: {
    headerVue,
  },
};
</script>
<template>
  <header-vue title="Profile d'utilisateur" />
  <router-view></router-view>
</template>