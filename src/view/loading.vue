<template>
  <div style="height: 500px;border: 1px solid #000;overflow: scroll">p
    <!--<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :auto-fill="false" :bottom-all-loaded="allLoaded"-->
                 <!--ref="loadmore"-->
                 <!--topPullText="下拉刷新" topDropText="正在更新" topLoadingText="加载中"-->
                 <!--bottomPullText="上啦加载" bottomDropText="正在更新" bottomLoadingText="请求中">-->
      <!--<ul>-->
        <!--<li v-for="item in list">{{ item.contentText }}</li>-->
      <!--</ul>-->
    <!--</mt-loadmore>-->
    <!--<ul>-->
      <!--<li v-if="true" v-for="item in arr">{{item.title}}</li>-->
    <!--</ul>-->
    <p>我是填充的数据</p>
    <h1 ref="title">我是用来测试的数据</h1>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "loading",
    data() {
      return {
        arr: [{
          title: 1
        },
          {
            title: 1
          },
          {
            title: 1
          },
          {
            title: 1
          }],
        allLoaded: false,
        list: [],
        pn: 0,
        userName: "15690511739"
      }
    },
    methods: {
      getData() {
        axios.get("/api/article/get", {
          pn: this.pn
        }, {withCredentials: true}).then(res => {
          console.log(res.data.data[this.pn]);
          this.list.push(res.data.data[this.pn]);
          this.$refs.loadmore.onTopLoaded();
          this.$refs.loadmore.onBottomLoaded();
          this.allLoaded = false;
          if (this.list.length === 3) {
            this.allLoaded = true;
          }
        })
      },
      loadTop() {
        this.allLoaded = false;
        console.log(222);
        this.getData()
      },
      loadBottom() {
        this.pn++;
        if (this.pn > 3) {
          console.log("加载完毕");
          this.allLoaded = true;
        } else {
          this.getData()
        }
        console.log(333)

      }
    },
    mounted() {
      console.log(this.$refs.title.offsetTop);
    },
    watch: {}
  }
</script>

<style scoped>

</style>
