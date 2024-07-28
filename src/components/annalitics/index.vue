<script>
import problemesVue from "./problemes.vue";
import questionsVue from "./questions.vue";
import tachesVue from "./taches.vue";

export default {
  components: { problemesVue, questionsVue, tachesVue },
  data() {
    return {
      taches: [
        {
          etat: "Arriéré",
          nombre: 11,
          pourcentage: 13,
          classColor: "theme1",
          classeName: "arriere",
        },
        {
          etat: "Commencé",
          nombre: 8,
          pourcentage: 9,
          classColor: "theme2",
          classeName: "commence",
        },
        {
          etat: "Non commencé",
          nombre: 15,
          pourcentage: 17,
          classColor: "theme3",
          classeName: "nonCommence",
        },
      ],
      questions: [
        {
          indice: "G",
          nom: "Joshué Agapé",
          total: 171.8,
        },
        {
          indice: "J",
          nom: "Joshué Agapé",
          total: 140,
        },
        {
          indice: "JA",
          nom: "Joshué Agapé",
          total: 135,
        },
        {
          indice: "J",
          nom: "Joshué Agapé",
          total: 123,
        },
        {
          indice: "J",
          nom: "Joshué Agapé",
          total: 100,
        },
        {
          indice: "UN",
          nom: "Joshué Agapé",
          total: 75,
        },
        {
          indice: "F",
          nom: "Joshué Agapé",
          total: 50,
        },
        {
          indice: "M",
          nom: "Mirana",
          total: 25,
        },
      ],
      problemesCree: [
        {
          indice: "J",
          nom: "Joshué Agapé",
          email: "joshueagape@gmail.com",
          nombre: 46,
        },
        {
          indice: "J",
          nom: "Joshué Agapé",
          email: "joshueagape@gmail.com",
          nombre: 46,
        },
        {
          indice: "J",
          nom: "Joshué Agapé",
          email: "joshueagape@gmail.com",
          nombre: 46,
        },
      ],
      problemesRegle: [
        {
          indice: "J",
          nom: "Joshué Agapé",
          email: "joshueagape@gmail.com",
          nombre: 46,
        },
        {
          indice: "JA",
          nom: "Joshué Agapé",
          email: "joshueagape@gmail.com",
          nombre: 46,
        },
        {
          indice: "J",
          nom: "Joshué Agapé",
          email: "joshueagape@gmail.com",
          nombre: 46,
        },
        {
          indice: "J",
          nom: "Joshué Agapé",
          email: "joshueagape@gmail.com",
          nombre: 46,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="cards">
    <taches-vue
      title="Nombre total des tâches ouvertes"
      nombre="{ 34 }"
      :datas="taches"
    />
    <questions-vue nonAttribue="7" :users="questions" />
    <problemes-vue
      titre="Le plus grand nombre de problèmes créés"
      :datas="problemesCree"
    />
    <problemes-vue
      titre="La plupart des problèmes réglés"
      :datas="problemesRegle"
    />
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem 0 1rem 2rem;
}
</style>