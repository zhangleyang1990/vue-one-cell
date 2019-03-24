export default [
    {
        path: '/user',
        name: 'user',
        component: resolve => require(['@/views/user/user'], resolve),
        meta: {
            title: '用户'
        }
    },
    {
        path: '/login',
        name: '登录',
        component: resolve => require(['@/views/user/login'], resolve),
        meta: {
            title: '登录'
        }
    }
]