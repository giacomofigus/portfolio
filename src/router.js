import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './views/AppHome.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
            meta: {
                title: "Giacomo Figus - Web Developer",
            }
        },
    ]
});

router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? "Default Title"
})

export { router };