<template>
  <div>
    <h1>欢迎来到vuex</h1>
    <h2>{{number}}</h2>
    <h2>{{country}}</h2>
    <h5>看你出不出来</h5>
    <h2>{{Allcountry}}</h2>

    <button @click="add(10)">加</button>
    <button @click="reduce">减</button>
    <button @click="timeChange">actions</button>
    <!--<button @click="cocountry">实现中国足球的梦想</button>-->
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import {mapMutations} from "vuex"
  import {mapActions} from "vuex"
  import {mapGetters} from "vuex"

  export default {
    name: "vuex-test",
    // computed:{
    //   number(){
    //     return this.$store.state.number
    //   },
    //   country(){
    //     return this.$store.state.country
    //   },//state原来的写法
    // }
    methods:{
      ...mapMutations([
        "plus",
        "reduce",
        "changeMsg"
      ]),
      ...mapActions([
        'timeChange'
      ]),
      add(a){
       return this.$store.commit('plus',a)
      }//mutations原来的写法
    },
    computed:{
      ...mapState([
        "number",
        "country"//state现在的写法
      ]),
      ...mapGetters(["Allcountry"])
      // Allcountry(){
      //   return this.$store.getters.Allcountry
      // }
    },
  }
</script>

<style scoped>

</style>
