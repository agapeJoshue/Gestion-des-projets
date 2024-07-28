import { createRouter, createWebHistory } from "vue-router";
/* PAGE */
import loginPage from "./pages/login.page.vue";
import indexPage from "./pages/index.vue";
import votreTravailPage from './pages/votreTravail.page.vue';
import projetPage from "./pages/projet.page.vue";
import affichagePage from "./pages/affichages.page.vue"
import cyclesPage from "./pages/cycles.page.vue";
import annaliticsPage from "./pages/annalitics.page.vue";
import profilePage from "./pages/profile.page.vue";


/* components projects */
import listeProjets from './components/projets/listsProject.vue'
import ajouterProjets from './components/projets/addProject.vue'

/* components cycles*/
import cycleNavigateur from './components/cycles/navigateur.vue';
import cycleItem1 from './components/cycles/cyclesComponents/item1.vue'
import cycleItem2 from './components/cycles/cyclesComponents/item2.vue'
import cycleItem3 from './components/cycles/cyclesComponents/item3.vue'
import cycleItem4 from './components/cycles/cyclesComponents/item4.vue'
import cycleItem5 from './components/cycles/cyclesComponents/item5.vue'
import cycleItem6 from './components/cycles/cyclesComponents/item6.vue'


const routes = [
    {
        path: '/',
        component: loginPage,
    },
    {
        path: '/plane',
        component: indexPage,
        children: [
            {
                path: 'travail',
                component: votreTravailPage,
                children: []
            },
            {
                path: 'projets',
                component: projetPage,
                children: [
                    { path: "", component: listeProjets },
                    { path: "ajouter", component: ajouterProjets },
                ]
            },
            {
                path: 'affichages',
                component: affichagePage,
                children: []
            },
            {
                path: 'cycles',
                component: cyclesPage,
                children: [
                    { path: "", component: cycleNavigateur },
                    { path: "Vue-de-10000-pieds-de-tous-les-cycles-actifs", component: cycleItem1 },
                    { path: "Obtenez-un-aperçu-de-chaque-cycle-actif", component: cycleItem2 },
                    { path: "Comparez-les-burndowns", component: cycleItem3 },
                    { path: "Identifiez-rapidement-les-problèmes-décisifs", component: cycleItem4 },
                    { path: "Zoomer-sur-les-cycles-qui-nécessitent-une-attention-particulière", component: cycleItem5 },
                    { path: "Garder-une-longueur-d-avance-sur-les-bloqueurs", component: cycleItem6 },
                ]
            },
            {
                path: 'annalitics',
                component: annaliticsPage,
                children: []
            },
            {
                path: 'profile',
                component: profilePage,
                children: []
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;