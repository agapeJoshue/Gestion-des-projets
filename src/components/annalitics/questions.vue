<script>
export default {
  props: ["nonAttribue", "users"],
  data() {
    return {
      defaultPourcentage: [
        "100%",
        "90%",
        "80%",
        "70%",
        "60%",
        "50%",
        "40%",
        "30%",
        "20%",
        "10%",
        "0%",
      ],
    };
  },
};
</script>

<template lang="">
    <div class="card">
        <div class="card-header">
            <h3>Questions en suspens</h3>
            <h4>Non attribué: {{ nonAttribue }}</h4>
        </div>
        <div class="container">
            <div class="graphics">
                <div class="pourcentage" v-for="(item, index) in defaultPourcentage" :key="index">
                    <span class="pourcentageValue">{{ item }}</span>
                    <span class="line"></span>
                </div>
                <div class="userName">
                    <span></span>
                    <div class="listes">
                        <div class="user" v-for="(user,i) in users" :key="i">
                            <span>{{ user.indice }}</span>
                            <div class="container-bar" :style="{ height: user.total + 'px' }">
                            </div>
                        </div>
                    </div>
                </div>
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
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-header h3 {
  margin-bottom: 1rem;
}
.card-header h4 {
  padding: 5px 10px;
  background: var(--color-primary-transparent);
  color: var(--color-primary-variant);
  border-radius: 5px;
  font-weight: 100;
}
.container {
  min-height: 175px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.graphics {
  position: relative;
  width: 90%;
  height: 100%;
}
.pourcentage {
  width: 100%;
  height: 17px;
  display: grid;
  grid-template-columns: 2.5rem auto;
  align-items: center;
  gap: 5px;
}
.pourcentage span:last-child {
  border-top: 0.01rem solid var(--color-info-dark);
}
.pourcentageValue {
  text-align: end;
}
.userName {
  display: grid;
  grid-template-columns: 2.5rem auto;
  align-items: center;
  gap: 5px;
}
.listes {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 6px;
}
.listes div span:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: var(--color-info-dark);
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  border-radius: 50%;
}
.user {
  position: relative;
  display: flex;
  justify-content: center;
}
.container-bar {
  /* 100% => 171.8px */
  position: absolute;
  bottom: 2.43rem;
  width: 10px;
  background: var(--color-warning-variant);
  animation: animationChart 1s;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
@keyframes animationChart {
  0% {
    height: 0px;
  }
}
</style>