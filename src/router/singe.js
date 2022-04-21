
/**
 * 单页路由(没有左侧菜单栏)
 */
const singeRouter = [
    {
        path: '/work-handle',
        component: () => import('@/views/work-handle/index.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
];

export default singeRouter