import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
// 加载栏配置
import { LoadingBar } from 'quasar'

import menuRouter from "./menu.js";
import singeRouter from "./singe.js";

const routes = [
    ...menuRouter, // 菜单栏路由
    ...singeRouter, // 单页路由 
    {
        path: "/:pathMatch(.*)", // 处理未匹配到路由
        redirect: "/lianxi"
    }
];

// history: createWebHistory(),createWebHashHistory
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    // 加载条
    LoadingBar.setDefaults({
        color: 'purple',
        size: '3px',
        position: 'top'
    })
    LoadingBar.start()
    next()
})

router.afterEach((to, from, failure) => {
    LoadingBar.stop()
})

export default router