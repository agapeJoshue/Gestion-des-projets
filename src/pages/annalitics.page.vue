<script>
import headerVue from "./header.vue";

export default {
  components: {
    headerVue,
  },
};
</script>
<template>
  <header-vue icon="ri-bar-chart-fill" title="Annalitics" />
  <router-view></router-view>
</template>