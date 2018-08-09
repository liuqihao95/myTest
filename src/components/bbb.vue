<template>
  <div>
    <h1>我是子路由二号</h1>
    <h2 v-for="(item,index) in routerList" :key="index">{{item.name}}</h2>
    <ul>
      <input type="text" v-model="test">
      <li v-for="(item,index) in newArr" :key="index">{{item}}</li>
    </ul>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <el-select ref="select" v-model="value7" placeholder="请选择" style="padding-bottom: 500px">
      <el-option-group
        v-for="group in options3"
        auto-complete="auto-complete"
        :key="group.label"
        :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-option-group>
    </el-select>
    <button @click="testSelect">点击</button>
    <select>
      <option value ="volvo">Volvo</option>
      <option value ="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: "bbb",
    data() {
      return {
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value7: '',
        value1: '',
        test: "",
        routerList: [],
        newArr: [],
        arr: ["aaaaa", "ab", "ac", "ad", "bb", "cc", "dd"]
      }
    },
    methods: {
      focusLOL(a){
        console.log(a);
      },
      testSelect(){
        if(!this.value7){
          // console.log(this.$refs.select);
          // window.focus.call(this.$refs[`select`].$el.getElementsByTagName('input')[0])
          this.$refs.select.toggleMenu()

          // this.$refs[`select`].$el.getElementsByTagName('input')[0].setAttribute("autofocus","autofocus"
          // this.$refs[`select`].$el.getElementsByTagName('input')[0].focus()
          // this.$refs[`select`].$el.getElementsByTagName('input')[0].focus()
          // console.log(this.$refs[`select`].$el.getElementsByTagName('input')[0]);
          // this.$refs[`select`].doublebarwedge =  focus()
        }
      }
    },
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
