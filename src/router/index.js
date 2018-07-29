import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/loading',
      name: 'loading',
      component:()=>import("@/view/loading")
    },
    {
      path: "/vuex",
      name: "vuex",
      component: () => import("@/view/vuex-test"),
      meta: {
        title: "这是一个测试vuex的专属页面"
      }
    },
    {
      path: "/checked",
      name: "复选框",
      component: () => import("@/components/checked")
    }, {
      path: "/test",
      name: "test",
      component: () => import("@/view/test"),
      children: [
        {
          path: "/aaaaa",
          name: "首页",
          component: () => import("@/components/aaa"),
          meta: {
            title: "这是嵌套路由的子路由"
          },
        }, {
          path: "/bbbb",
          name: "二手房",
          component: () => import("@/components/bbb")
        }
      ]
    }

  ]
})
