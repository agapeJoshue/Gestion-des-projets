<script>
import navItemVue from './navItem.vue';

export default {
    components: {
        navItemVue
    }
}
</script>

<template lang="">
    <div class="content">
        <div class="a-propos">
            <div class="titre">
                <h1>Instantanés à la demande de tous vos cycles</h1>
                <p>Surveillez les cycles des projets, suivez les problèmes prioritaires et zoomer sur les cycles qui nécessitent une attention particulière.</p>
            </div>
            <div class="image">
                <img src="../../assets/uploads/img2.png" alt="">
                <img src="../../assets/uploads/img1.png" alt="" id="img1">
            </div>
        </div>
        <div class="nav-item">
            <navItemVue urlNavigator="/plane/cycles/Vue-de-10000-pieds-de-tous-les-cycles-actifs" icon="ri-folder-3-line" titre="Vue de 10 000 pieds de tous les cycles actifs." description="Effectuez un zoom arrière pour voir les cycles en cours sur tous vos projets en même temps au lieu de passer d'un cycle à l'autre dans vos projet."/>

            <navItemVue urlNavigator="/plane/cycles/Obtenez-un-aperçu-de-chaque-cycle-actif" icon="ri-loader-2-fill" titre="Obtenez un aperçu de chaque cycle actif." description="Suivez les indicateurs de haut niveau pour tous les cycles actifs, voyez leur état d'avancement et ayez une idée de la portée par rapport au échéances."/>

            <navItemVue urlNavigator="/plane/cycles/Comparez-les-burndowns" icon="ri-line-chart-line" titre="Comparez les burndowns" description="Surveillez les performances de  chacune de vos équipes en jetant un coup d'oeil au rapport d'avancement de chaque cycle."/>

            <navItemVue urlNavigator="/plane/cycles/Identifiez-rapidement-les-problèmes-décisifs" icon="ri-spam-2-line" titre="Identifiez rapidement les problèmes décisifs." description="Prévisualisez les problèmes prioritaires pour chaque cycles par rapport aux dates d'échéance. Visualisez-les tous par cycle en un clic."/>

            <navItemVue urlNavigator="/plane/cycles/Zoomer-sur-les-cycles-qui-nécessitent-une-attention-particulière" icon="ri-search-line" titre="Zoomer sur les cycles qui nécessitent une attention particulière." description="Examinez l'état  de tout cycle qui n'est pas conforme aux attentes ..."/>

            <navItemVue urlNavigator="/plane/cycles/Garder-une-longueur-d-avance-sur-les-bloqueurs" icon="ri-microscope-line" titre="Garder une longueur d'avance sur les bloqueurs." description="Réperez les défis d'un projet à l'autre et voyez les ..."/>
        </div>
    </div>
</template>

<style scoped>
.content {
    padding: 2rem 0rem 1rem 2rem;
    max-height: 93vh;
    overflow-y: overlay;
}
.content::-webkit-scrollbar {
    width: 0px;
}
.a-propos {
    display: grid;
    gap: 30%;
    grid-template-columns: auto 40%;
}
.titre {
    margin-left: 4rem;
}
h1 {
    margin-top: 5rem;
    margin-bottom: 1rem;
}
p{
    font-size: 1.1rem;
}
.image {
    position: relative;
    margin-right: 2rem;
}
#img1 {
    position: absolute;
    bottom: -27px;
    left: -78px;
    width: 250px;
    z-index: 2;
}
.nav-item {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    align-items: center;
    margin-right: 2rem;
}
</style>