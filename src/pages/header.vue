<script>
export default {
  props: ["icon", "title"],
};
</script>
<template>
  <div class="title-header">
    <i :class="icon"></i>
    <h2>{{ title }}</h2>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.title-header {
  background: var(--color-white);
  width: 100%;
  height: 60px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--color-info-dark);
  padding-left: 2rem;
}

i {
  font-size: 1.5rem;
}
</style>
