<template>
  <div>
    <h1>我是子路由二号</h1>
    <h2 v-for="(item,index) in routerList" :key="index">{{item.name}}</h2>
    <ul>
      <input type="text" v-model="test">
      <li v-for="(item,index) in newArr" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "bbb",
    data() {
      return {
        test: "",
        routerList: [],
        newArr: [],
        arr: ["aaaaa", "ab", "ac", "ad", "bb", "cc", "dd"]
      }
    },
    methods: {},
    watch: {
      test(val) {
        console.log(val);
        console.log(this);
        this.newArr = this.arr.filter(item => item.indexOf(val) >= 0);
      }
    },
    created() {
      this.newArr = this.arr;
      this.routerList = this.$route.matched;
      let arr = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 2, 4, 5, 6, 6];
      // 数组的去重方法一
      // let arr1=new Set(arr);
      // arr=[...arr1];
      // console.log(arr);
      // let arr1=[];
      // for(let i=0;i<arr.length;i++){
      //   if(arr1.indexOf(arr[i])<0){
      //     console.log(arr[i]);
      //     arr1.push(arr[i]);
      //   }
      // }
      // console.log(arr1);
      //利用对象的属性（推荐）
      // let res=[];
      // let obj={};
      // for(let i=0;i<arr.length;i++){
      //   if(!obj[arr[i]]){
      //     res.push(arr[i])
      //    obj[arr[i]]=1;
      //   }
      // }
      // console.log(res);
      //先排序后去重，相邻元素进行比较。
      // var arr2 = arr.sort();
      //
      // var res = [arr2[0]];
      //
      // for(var i=1;i<arr2.length;i++){
      //
      //   if(arr2[i] !== res[res.length-1]){
      //
      //     res.push(arr2[i]);
      //
      //   }
      //
      // }
      //
      // console.log(res);
    }
  }
</script>

<style scoped>

</style>
