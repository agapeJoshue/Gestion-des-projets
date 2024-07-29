<script>
export default {
  props: [
    "icon",
    "title",
    "btnCreateLink",
    "btnCreateLinkValue",
    "btnCreateLinkUrl",
  ],
};
</script>
<template>
  <div class="container-menu">
    <div class="title-header">
      <i :class="icon"></i>
      <h2>{{ title }}</h2>
    </div>
    <router-link v-if="btnCreateLink===true" class="button" :to="btnCreateLinkUrl">{{
      btnCreateLinkValue
    }}</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.container-menu {
  background: var(--color-white);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-info-dark);
  padding-right: 1rem;
  transition: var(--tran-03);
}
.title-header {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding-left: 2rem;
}

i {
  font-size: 1.3rem;
}
h2 {
  font-size: 1.1rem;
}
.button {
  padding: 10px 18px;
  font-size: 0.9rem;
  font-weight: 600;
  background: var(--color-primary);
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  transition: var(--tran-03);
}
.button:hover {
  background: var(--color-primary-variant);
}
</style>
