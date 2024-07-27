<script>
import headerVue from "./header.vue";

export default {
  components: {
    headerVue,
  },
};
</script>
<template>
  <header-vue title="Annalitics" />
  <router-view></router-view>
</template>