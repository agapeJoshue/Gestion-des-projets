import { createRouter, createWebHistory } from "vue-router";
import page1 from './pages/page1.vue'
import page2 from './pages/page2.vue'
import composant1 from './components/composant1.vue'
import composant2 from './components/composant2.vue'

const routes = [
    {
        path: '/',
        component: page1,
        children: [
            { path: '', component: composant1 },
        ]
    },
    {
        path: '/page2',
        component: page2,
        children: [
            { path: '', component: composant2 },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;