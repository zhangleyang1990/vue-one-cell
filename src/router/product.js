export default [
  {
    path: '/workJect', // 首页
    name: 'index',
    component: resolve => require(['@/views/product/index'], resolve),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/', // 工程案例
    name: 'workJect',
    component: resolve => require(['@/views/product/workJect'], resolve),
    meta: {
      title: '工程案例'
    }
  },
  {
    path: '/production', // 产品
    name: 'myProduct',
    component: resolve => require(['@/views/product/myproduct'], resolve),
    meta: {
      title: '产品'
    }
  },
  {
    path: '/useInfo', // 使用说明
    name: 'useInfo',
    component: resolve => require(['@/views/product/useinfo'], resolve),
    meta: {
      title: '使用说明'
    }
  },
  {
    path: '/project/detail', // 项目详情
    name: 'useInfo',
    component: resolve => require(['@/views/product/projectDetail'], resolve),
    meta: {
      title: '使用说明'
    }
  }
]