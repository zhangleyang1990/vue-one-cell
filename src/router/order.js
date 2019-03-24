export default [
    {
        path:'/cart',
        name:'cart',
        component:resolve=>require(['@/views/order/cart'],resolve),
        meta:{
            title:'购物车'
        }
    }
]