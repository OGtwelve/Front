import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from '../views/main.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: MainPage,
        meta: {
            title: '首页'
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router
