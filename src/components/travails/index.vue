<script>
import apercuVue from "./apercu.vue";
import chargesVue from "./charges.vue";
import userInfoVue from "./userInfo.vue";

export default {
  components: { apercuVue, chargesVue, userInfoVue },
  data() {
    return {
      apercus: [
        {
          icon: "ri-ai-generate",
          title: "Problèmes créés",
          nombre: 0,
        },
        {
          icon: "ri-account-circle-line",
          title: "Problèmes attribués",
          nombre: 9,
        },
        {
          icon: "ri-archive-stack-line",
          title: "Numéros souscrits",
          nombre: 11,
        },
      ],
      charges: [
        {
          title: "Arriéré",
          nombre: 3,
          className: "text-muted",
        },
        {
          title: "Nom commencé",
          nombre: 2,
          className: "primary",
        },
        {
          title: "Travailler sur",
          nombre: 0,
          className: "warning",
        },
        {
          title: "Terminé",
          nombre: 4,
          className: "success",
        },
        {
          title: "Annulé",
          nombre: 0,
          className: "danger",
        },
      ],
    };
  },
};
</script>

<template lang="">
    <div class="content">
        <div class="resume">
            <h2>Aperçu</h2>
            <div class="apercu">
                <apercu-vue v-for="(itemApercu, index) in apercus" :key="index" :icon="itemApercu.icon" :titre="itemApercu.title" :nombre="itemApercu.nombre"/>
            </div>
            <h2>Charge de travail</h2>
            <div class="charge">
                <charges-vue v-for="(itemCharge, index) in charges" :key="index" :classValue="itemCharge.className" :titre="itemCharge.title" :nombre="itemCharge.nombre"/>
            </div>
        </div>
        <div class="user-info">
            <userInfo-vue/>
        </div>
    </div>
</template>

<style scoped>
.content {
  position: relative;
  display: grid;
  grid-template-columns: auto 20rem;
  padding: 2rem;
  height: calc(100% - 60px);
}
.resume h2 {
  margin-bottom: 0.7rem;
  font-size: 1.1rem;
}
.apercu {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  margin-right: 1rem;
  margin-bottom: 2rem;
}
.charge {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(5, 1fr);
  margin-right: 1rem;
  margin-bottom: 2rem;
}
.user-info {
  position: absolute;
  right: 0;
  top: 0;
  width: 20rem;
  height: 100%;
  background: var(--color-white);
  transition: var(--tran-03);
}
</style>