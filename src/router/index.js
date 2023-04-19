import {createRouter, createWebHistory} from 'vue-router'

import MainPage from '../views/main.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


// 动态修改title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router
