<script>
import headerVue from "./header.vue";

export default {
  components: {
    headerVue,
  },
};
</script>
<template>
  <header-vue icon="ri-stack-line" title="Affichages" />
  <router-view></router-view>
</template>