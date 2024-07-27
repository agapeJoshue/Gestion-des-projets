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
                    /* { path: '', component: votreTravailPage }, */
                ]
            },
            {
                path: 'affichages',
                component: affichagePage,
                children: [
                    /* { path: '', component: votreTravailPage }, */
                ]
            },
            {
                path: 'cycles',
                component: cyclesPage,
                children: [
                    /* { path: '', component: votreTravailPage }, */
                ]
            },
            {
                path: 'annalitics',
                component: annaliticsPage,
                children: [
                    /* { path: '', component: votreTravailPage }, */
                ]
            },
            {
                path: 'profile',
                component: profilePage,
                children: [
                    /* { path: '', component: votreTravailPage }, */
                ]
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;