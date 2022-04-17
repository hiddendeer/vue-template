import Layout from '@/layout/vr-layout.vue'

/**
 * 左侧菜单路由
 */
const menuRouter = [
    {
        path: '/', component: Layout, children: [
            {
                path: 'lianxi',
                component: () => import('@/views/work-handle/index.vue')
            },
        ]
    },
    {
        path: '/base-data', component: Layout, children: [
            {
                path: 'system',
                component: () => import('@/views/system/index.vue')
            },
        ]
    },
];

export default menuRouter

