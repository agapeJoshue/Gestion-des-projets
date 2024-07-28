<script>
export default {
  props: ["titre", "datas"],
};
</script>

<template>
  <div class="card">
    <h3>{{ titre }}</h3>
    <ul>
      <li v-for="(item, index) in datas" :key="index">
        <h4 class="userInfo">
          <span>{{ item.indice }}</span>
          <span>{{ item.email }}</span>
        </h4>
        <h3>{{ item.nombre }}</h3>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card {
  border: 0.001rem solid var(--color-info-dark);
  padding: 1.6rem;
  border-radius: 8px;
  margin-right: 2rem;
  margin-bottom: 2rem;
}
h3 {
  margin-bottom: 1rem;
}
ul {
  margin-top: 0.5rem;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
}
.userInfo {
  display: flex;
  justify-content: space-around;
  gap: 8px;
  align-items: center;
}
.userInfo span:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: var(--color-info-dark);
  border-radius: 50%;
  color: #fff;
}
.userInfo span:nth-child(2) {
  font-size: 0.9rem;
  color: var(--color-info-dark);
}
</style>