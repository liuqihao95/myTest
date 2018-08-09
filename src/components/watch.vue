<template>
    <div>
      <h1>{{data}}</h1>
      <h2>{{fool}}</h2>
      <h3>{{fuldata}}</h3>
      <input type="text" v-model="data">
      <button @click="changeData">改变</button>
    </div>
</template>

<script>
    export default {
        name: "watch",
      data(){
          return{
            fool:"一个文本数据",
            data:"我是一个你用来改变的数据"
          }
      },
      methods:{
        changeData(){
          this.data="我是改变以后的数据"
        }
      },
      computed:{
          fuldata(){
            console.log("computed执行了");
            return   this.data+this.fool
          }
      },
      watch:{
          data(){
            console.log(this.data);
          }
      }
    }
</script>

<style scoped>

</style>
