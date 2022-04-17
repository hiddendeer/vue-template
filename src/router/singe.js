
/**
 * 单页路由(没有左侧菜单栏)
 */
const singeRouter = [
    {
        path: '/work-handle',
        component: () => import('@/views/work-handle/index.vue')
    },
];

export default singeRouter