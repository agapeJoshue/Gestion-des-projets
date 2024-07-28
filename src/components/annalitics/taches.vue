<script>
export default {
  props: ["title", "nombre", "datas"],
};
</script>

<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <h2>34</h2>
    <div class="theme" v-for="(item, index) in datas" :key="index">
      <div class="titre">
        <h4 :class="item.classColor">
          <i class="ri-circle-fill"></i>
          <span>{{ item.etat }}</span>
          <span class="nbr">{{ item.nombre }}</span>
        </h4>
        <h4 class="pourcentage">{{ item.pourcentage }}%</h4>
      </div>
      <div class="progressBar">
        <span
          :class="item.classeName"
          :style="{ width: item.pourcentage + '%' }"
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid var(--color-info-dark);
  padding: 1.6rem;
  border-radius: 8px;
  margin-right: 2rem;
  margin-bottom: 2rem;
}
h3 {
  margin-bottom: 1rem;
}
.theme .titre {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h4 {
  display: flex;
  gap: 7px;
  align-items: center;
}
.nbr {
  background: var(--color-white);
  padding: 5px;
  border-radius: 8px;
  color: var(--color-info-dark);
}
.pourcentage {
  color: var(--color-info-dark);
  font-size: 1rem;
}
.progressBar {
  position: relative;
  height: 5px;
  margin-top: 8px;
  border: none;
  background: var(--color-light);
  border-radius: 5px;
  margin-bottom: 25px;
}
.dark .progressBar {
  background: var(--color-white);
}
.theme:last-child .progressBar {
  margin-bottom: 0;
}
.progressBar span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 5px;
}
.arriere {
  background: var(--color-dark);
}
.commence {
  background: var(--color-warning);
}
.nonCommence {
  background: var(--color-primary);
}
.theme1 i.ri-circle-fill {
  color: var(--color-info-dark);
}
.theme2 i.ri-circle-fill {
  color: var(--color-warning);
}
.theme3 i.ri-circle-fill {
  color: var(--color-primary);
}
</style>