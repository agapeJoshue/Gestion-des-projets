<script>
import tableVue from "./templates/tableUX.vue";

export default {
  components: { tableVue },
  data() {
    return {
      problemes: [
        {
          numero: "BONJOUR-01",
          question: "Voici les tache que vous devez faire",
          etat: "A faire",
          priorite: true,
          cessionnaires: "Joshué Agapé",
          Etiquettes: "Arrière-plan",
        },
        {
          numero: "BONJOUR-02",
          question: "Voici les tache que vous devez faire",
          etat: "A faire",
          priorite: true,
          cessionnaires: "Joshué Agapé",
          Etiquettes: "OPS",
        },
        {
          numero: "BONJOUR-03",
          question: "Voici les tache que vous devez faire",
          etat: "Fait",
          priorite: true,
          cessionnaires: "Joshué Agapé",
          Etiquettes: "Back-end",
        },
        {
          numero: "BONJOUR-04",
          question: "Voici les tache que vous devez faire",
          etat: "Arriéré",
          priorite: true,
          cessionnaires: "Joshué Agapé",
          Etiquettes: "OPS",
        },
        {
          numero: "BONJOUR-05",
          question: "Voici les tache que vous devez faire",
          etat: "Test",
          priorite: true,
          cessionnaires: "Joshué Agapé",
          Etiquettes: "Front-end",
        },
        {
          numero: "BONJOUR-06",
          question: "Voici les tache que vous devez faire",
          etat: "In merge",
          priorite: true,
          cessionnaires: "Joshué Agapé",
          Etiquettes: "Front-end",
        }
      ],
    };
  },
};
</script>

<template lang="">
    <div class="content">
        <table-vue :datas="problemes" />
    </div>
</template>

<style scoped>
.content {
  padding: 0;
  max-height: 86.5vh;
  overflow: hidden;
}
</style>