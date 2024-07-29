<script>
export default {
    data() {
        return {
            user: {
                indice: "JA",
                username: "Joshué Agapé",
                email: "joshueagape@gmail.com",
                joinning_at: "07 mais 2024",
            },
            projets: [
                {
                    project_id: 1,
                    path: "../../assets/uploads/01-metiers-UX-UI-Design.jpg",
                    title: "Hello archi",
                    numero: "BONJOUR",
                },
                {
                    project_id: 2,
                    path: "../../assets/uploads/01-metiers-UX-UI-Design.jpg",
                    title: "Gestion des projets",
                    numero: "PROJECT",
                },
            ]
        }
    },
};
</script>

<template lang="">
    <div>
        <div class="header">
            <h3><span>{{ user.indice }}</span></h3>
        </div>
        <div class="body">
            <h2>{{ user.username }}</h2>
            <h3 class="text-muted">({{ user.email }})</h3>
            <br>
            <br>
            <div class="gridD">
                <h3><span class="text-muted">Rejoint le</span> <span>{{ user.joinning_at }}</span></h3> <br>
                <h3><span class="text-muted">Fuseau horaire</span> <span>23:31 UTC</span></h3>
            </div><br><br>
            <h2>Votre projet</h2>
            <div class="lists-projet">
                <div class="projet" v-for="projet in projets" :key="projet.project_id">
                    <div class="image">
                        <img src="../../assets/uploads/01-metiers-UX-UI-Design.jpg" alt="">
                    </div>
                    <div class="info">
                        <h3>{{ projet.title }}</h3>
                        <small class="text-muted">{{ projet.numero }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 100px;
  background: url(../../assets/uploads/coffee-2242213_640.jpg) no-repeat center /
    cover;
}
.header h3 {
    position: absolute;
    background: var(--color-info-dark);
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    left: 1.2rem;
    bottom: -20px;
}
.body {
  margin-top: 2rem;
  padding: 1rem;
}
.body h2 {
    margin-bottom: 6px;
}
.body h3 {
    margin-left: 4px;
}
.gridD h3 {
    display: grid;
    grid-template-columns: 10rem auto;
}
.lists-projet {
    display: flex;
    gap: .8rem;
    flex-direction: column;
}
.projet {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: .6rem;
}
.image {
    width: 50px;
    max-height: 50px;
    overflow: hidden;
    border-radius: 5px;
}
.projet h3 {
    margin-left: 0;
    margin-bottom: 2px;
}
</style>