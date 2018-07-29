<template>
  <div class="hello">
    <h1 ref="firstH1" style="user-select: none">我是用来测试能不能被选中的测试文本</h1>
    <h2 ref="mybox">我是用来测试获取DOM元素的测试元素</h2>
    <input type="checkbox"  :value="false" checked="" ref="test">
    <router-link to="/test">去调用复选框</router-link>
    <router-link to="/loading">我测试无限加载</router-link><p>
    2222222222222
  </p>
  <h1 v-if="false" style="border: 1px solid #ff6700">我是v-if</h1>
    <p>333333333333333333333333333333333333333333333</p>
    <h1 v-show="false"  style="border: 1px solid #ff6700">我是v-show</h1>
    <p>4444444444444444444444444444444444</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        dddd:"你是都比吗",
        lol:"",
        DNF:""
      }
    },
    methods:{
      toToken(){
        console.log(this.$refs.test);
        // console.log(this.$refs.mybox);
        // let pig=this.$refs;
        // console.log(pig);
        // pig.name="娃娃";
        // pig.home="日本";
        // console.log(pig.home);
        // console.log(pig.entries());
        // for(let {prop} of pig.entries()){
        //   console.log(prop);
        // }
        this.$refs.firstH1.style.color = 'red';
        let self=this;
        setTimeout(()=>{
          self.$refs.firstH1.style.fontSize="100px";
          self.$refs.firstH1.style.color="blue";
          self.$refs.firstH1.style.userSelect="none";
        },5000)
        // this.$refs.myBox.style.color='red';
        // console.log(this.GLOBAL);
        // this.sendMsg()
        // this.getMsg()
      }
    },
    mounted(){
      this.toToken()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
