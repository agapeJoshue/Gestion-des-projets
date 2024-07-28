<script>
export default {
  props: ["navItem"],
};
</script>

<template lang="">
    <ul class="nav-bar">
        <li v-for="(item, index) in navItem" :key="index" :class="{ active: $route.path === item.url }">
            <router-link :to="item.url">{{ item.itemName }}</router-link>
        </li>
    </ul>
</template>

<style scoped>
.nav-bar {
  border-top: 1px solid var(--color-light);
  border-bottom: 1px solid var(--color-light);
  display: flex;
  align-items: center;
}
li {
  position: relative;
  padding: 1rem 0.6rem 0.8rem;
  margin-left: 1rem;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: var(--tran-03);
}
a {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-info-dark);
  transition: var(--tran-03);
}
li:hover a,
.nav-bar li.active a {
  color: var(--color-primary);
}
.nav-bar li.active {
  border-bottom: 2px solid var(--color-primary);
}
</style>