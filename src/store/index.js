import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    number: 9527,
    country: "这是永远进不了世界杯的中国队",
    userName:"萨德里奇",
    userPwd:"123456"
  },//访问状态对象
  getters: {
    updateUsername(state){
       return state.userName+"克罗地亚"
    }
  },//触发状态
  mutations: {
      setMsg(state,data){
        state.userName=data.userName;
        state.userPwd=data.userPwd;
      }
  },//计算属性
  actions: {
    timeChange(context) {
      setTimeout(() => {
        context.commit('reduce');
      }, 3000)
    }
  }
})

export default store;
