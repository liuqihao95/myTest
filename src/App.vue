<template>
  <div id="app">
    <!--<img src="./assets/logo.png" @click="jump">-->
    <!--<router-link to="/vuex" style="text-align: center;color: red;font-size: 20px;display: block;text-decoration: none">-->
      <!--跳转到vuex的测试页面-->
    <!--</router-link>-->
    <router-view/>
  </div>
</template>

<script>
  import '../static/init.css'
  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'

  export default {
    name: 'App',
    methods:{
      jump(){
        this.$router.push({name:'vuex',params:{userId:9527}})
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
