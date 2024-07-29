<script>
import backVue from "../back.vue";

export default {
  components: { backVue },
  data() {
    return {
      numero: "",
      titre: "",
      description: "",
      users: [],
      membres: [
        {
          id: 1,
          username: "Joshué Agapé",
          indice: "JA"
        },
        {
          id: 2,
          username: "Macy Grace",
          indice: "MG"
        },
        {
          id: 3,
          username: "Fanilo Edge",
          indice: "FE"
        },
        {
          id: 4,
          username: "Fitahiana",
          indice: "F"
        },
        {
          id: 5,
          username: "Malala",
          indice: "M"
        },
        {
          id: 6,
          username: "Solofondrasera",
          indice: "S"
        },
        {
          id: 7,
          username: "Charlys",
          indice: "C"
        }
      ]
    };
  },
  methods: {
    checkUser(user) {
      if (this.users.includes(user)) {
        return true;
      }
      return false;
    },
  },
};
</script>

<template>
  <div>
    <back-vue ULR="/plane/projets" textAfficher="retour dans la listes" />
    <div class="form-content">
      <h2>Formulaire d'ajout du projet</h2>
      <form action="">
        <div class="group-form-group">
          <div class="form-group">
            <label for="numero">Identifiant</label>
            <input type="text" v-model="numero" id="numero" />
            <small class="danger">{{ numero }}</small>
          </div>
          <div class="form-group">
            <label for="titre">Titre du projet</label>
            <textarea
              type="text"
              v-model="titre"
              rows="1"
              id="titre"
            ></textarea>
            <small class="danger">{{ titre }}</small>
          </div>
        </div>
        <div class="form-group">
          <label for="description">Description du projet</label>
          <textarea v-model="description" id="description" rows="3"></textarea>
          <small class="danger">{{
            description
          }}</small>
        </div>
        <div class="form-group">
          <fieldset>
            <legend>Sélectionner les membres assigné au projet</legend>
            <div class="checkbox-group">

              <label v-for="userInfo in membres" :key="userInfo.id" :class="{ checked: this.checkUser(userInfo.id) }">
                <input
                  type="checkbox"
                  v-model="users"
                  id=""
                  :value="userInfo.id"
                />
                <span
                  >{{ userInfo.username }}
                  <i
                    class="ri-check-fill success"
                    v-if="this.checkUser(userInfo.id)"
                    >checked</i
                  ></span
                >
              </label>
            </div>
          </fieldset>
        </div>
        <button class="btn-submit">Enregistrer</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
#dnone {
  display: none;
}
.form-content {
  border: 1px solid var(--color-info-dark);
  border-radius: 10px;
  padding: 2rem;
  width: 50%;
  margin: 0 auto;
}
h2 {
  text-align: center;
  margin-bottom: 1rem;
}
.group-form-group {
  display: grid;
  gap: 2rem;
  align-items: center;
  grid-template-columns: 1fr 2fr;
}
.form-group {
  display: flex;
  gap: 6px;
  flex-direction: column;
  margin-top: 1rem;
}
label {
  color: var(--color-info-dark);
  font-weight: 500;
  font-size: 1rem;
}
input,
textarea {
  letter-spacing: 0.1rem;
  font-weight: 500;
  font-size: 1rem;
  padding: 8px 14px;
  border-radius: 4px;
  background: var(--color-white);
  color: var(--color-dark);
}
textarea {
  resize: none;
}
textarea::-webkit-scrollbar {
  width: 0;
}
.btn-submit {
  margin-top: 1rem;
  background: var(--color-primary);
  color: #fff;
  padding: 8px 14px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: var(--tran-03);
}
.btn-submit:hover {
  background: var(--color-primary-variant);
}
fieldset {
  border: 1px solid var(--color-info-dark);
  padding: 1rem;
  border-radius: 5px;
}
legend {
  margin: 0 0.5rem;
  padding: 1rem;
  font-size: 1.1rem;
}
.checkbox-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1.3rem;
  max-height: 200px;
  overflow: overlay;
}
.checkbox-group::-webkit-scrollbar {
  width: 0;
}
.checkbox-group label {
  cursor: pointer;
  transition: var(--tran-03);
  width: 100%;
  display: flex;
  align-items: center;
}
.checkbox-group label span {
  padding: 5px 12px;
}
.checkbox-group label.checked span {
  padding: 5px 12px;
  border-radius: 15px;
  background: var(--color-primary-transparent);
  color: var(--color-primary);
}
.checkbox-group input {
  padding: 0;
}
.ri-check-fill {
  margin-left: 0.7rem;
  font-size: 0.8rem;
}
</style>