// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'babel-polyfill'//兼容IE

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ja'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);

Vue.use(ElementUI, { locale })

import store from './store/index' //引入vuex状态管理库
import components from './plugins/components'//全局组件
import global from "./global"//全局变量
import base from "./base"//全局函数
import {checkMsg} from './database'



Vue.use(components);//在全局进行注册
Vue.use(base);//全局函数跟全局组件一样注册
Vue.prototype.GLOBAL =global;//挂在到Vue的prototype上去
Vue.prototype.checkMsg =checkMsg;//挂在到Vue的prototype上去
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
