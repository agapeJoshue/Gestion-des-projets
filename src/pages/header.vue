<script>
export default {
  props: ["title"],
};
</script>
<template>
  <div class="title-header">
    <h2>{{ title }}</h2>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.title-header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  color: var(--color-info-dark);
  padding-left: 2rem;
}
</style>
