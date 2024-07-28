<script>
export default {
    props: ["urlNavigator","icon", "titre", "description"]
};
</script>

<template lang="">
    <router-link :to="urlNavigator">
        <div class="titre">
            <h3>{{ titre }}</h3>
            <i :class="icon"></i>
        </div>
        <br>
        <p>{{ description }}</p>
    </router-link>
</template>

<style scoped>
a {
  background: var(--color-white);
  border-radius: 7px;
  align-items: center;
  padding: 1.2rem;
  height: 100%;
  width: 100%;
}
.titre {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}
i {
  font-size: 1.4rem;
  color: var(--color-primary);
}
h3 {
  font-size: 1.1rem;
  font-weight: 500;
}
p{
    font-size: 1rem;
}
</style>