<template>
  <div>
    <h1>222222222222222222222222222222</h1>
    <h2 v-for="(item,index) in routerList" :key="index">{{item.name}}</h2>
    <el-select v-model="value" placeholder="请选择" class="item">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: "aaa",
    data() {
      return {
        options:[],
        routerList: []
      }
    },
    methods: {
      setData() {
        let today = moment().format('HH:mm:ss');
        console.log(today);
      }
    },
    created() {
      console.log(this.$route.matched);
      this.routerList = this.$route.matched.filter(item => item.name)
      console.log(this.routerList);
      // console.log(this.localStorage.user);
      console.log(localStorage.getItem("user"));
      console.log(111);
      this.setData();

      // let str = "sssssssssssssjjjjjjjjjjjjjjjjjeeeeeeeeeeooooo";
      // let obj = {};
      // for (let i = 0; i < str.length; i++) {
      //
      //   if (!obj[str[i]]) {
      //     obj[str[i]] = 1
      //   } else {
      //     obj[str[i]] += 1
      //   }
      // }
      // console.log(obj);

      // let arr = [2, 3, 45, 5];
      // arr.splice(0, 0,"盼盼");
      // console.log(arr);

      // let arr=[1,2,3,4,5];
      // let arr1=[6,7,8,9];
      // arr=arr.concat(arr1);
      // console.log(arr);
      //连接两个数组

      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      arr.shift();
      console.log(arr);


    }
  }
</script>

<style>
  .item{
    margin-bottom: 200px;
  }
</style>
