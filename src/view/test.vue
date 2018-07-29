<template>
  <div>
    我是调用复选框的页面
    <checkedGroup :options="options" v-model="checkedValue"></checkedGroup>
    <h1>{{checkedValue}}</h1>
    <div class="main">
      <div class="title">
        <h5 :class="{active:index===1}" @click="index=1">河北省</h5>
        <h5 :class="{active:index===2}" @click="index=2">天津市</h5>
        <h5 :class="{active:index===3}" @click="index=3">北京市</h5>
        <div ref="faguo"></div>
      </div>
      <div class="T-body">
        <ul class="wrap clearFix" ref="boss">
          <li>我是河北省</li>
          <li>我是天津市</li>
          <li>我是北京市</li>
        </ul>
      </div>
      <h1>{{userName}}</h1>
      <h1>{{userPwd}}</h1>
      <h1>{{updateUsername}}</h1>
      <button @click="goto">去首页</button>
      <el-button @click="setMsg(data)">修改状态</el-button>
      <h2>{{userName}}</h2>
      <router-link :to="{name:'首页',params:{id:882}}">去第一个子路由</router-link>
      <router-link :to="{name:'二手房',params:{id:882}}">去第二个子路由</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import checkedGroup from "../components/checked"
  import {mapState, mapActions, mapMutations, mapGetters} from "vuex"

  export default {
    name: "test",
    components: {
      checkedGroup
    },
    data() {
      return {
        index: 1,
        data:{
          userName:"齐盼盼",
          userPwd:"我也不认识密码啊"
        },
        options: [
          {value: 1, label: "河北省"},
          {value: 2, label: "河南省"},
          {value: 3, label: "山东省"},
          {value: 4, label: "山西省"},
        ],
        checkedValue: []
      }
    },
    methods: {
      goto() {
        // this.$router.push({name: "HelloWorld", params: {id: 997}})
        // this.$router.push({path:"/HelloWorld",query:{id:99}})
        this.$router.push({path: "/HelloWorld", params: {id: 99}})
      },
      ...mapMutations([
          "setMsg"
      ]),
      ...mapActions([

      ])
    },
    computed: {
      ...mapState([
        "userName",
        "userPwd"
      ]),
      ...mapGetters([
        "updateUsername"
      ])
    },
    mounted(){
      localStorage.setItem("user","齐盼盼")
    },
    watch: {
      index(val) {
        console.log(val);
        this.$refs.boss.style.marginLeft = -(this.index - 1) * 300 + "px"
        this.$refs.faguo.style.marginLeft = (this.index - 1) * 100 + "px"
      }
    }
  }
</script>

<style scoped>
  .main {
    width: 300px;
    height: 505px;
    margin: 50px auto;
  }

  .main .title {
    position: relative;
    height: 55px;
    padding: 0;
    margin: 0;
  }

  .clearFix::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    clear: both;
  }

  .main .title > div {
    width: 100px;
    height: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: red;
    transition: all 0.6s;
  }

  .main .title .active {
    background: blueviolet;
    color: #fff;
    transition: all 0.6s ease-in;
  }

  .main .title h5 {
    float: left;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: none;
    box-sizing: border-box;
    margin: 0;
    transition: all 0.1s ease-out;
  }

  .main .title h5:nth-of-type(2) {
    border-right: none;
    border-left: none;
  }

  .main .T-body {
    width: 300px;
    height: 450px;
    overflow: hidden;
  }

  .main .T-body ul {
    list-style: none;
    width: 900px;
    margin: 0;
    padding: 0;
    transition: all 0.6s;
  }

  .main .T-body ul li {
    float: left;
    width: 300px;
    height: 450px;
  }
</style>
