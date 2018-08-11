<template>
  <div class="CCTV clear-fix">
    <el-select class="item" v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input style="width: 400px;" placeholder="请输入内容" v-model="input5" class="input-with-select item">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-button class="item">添加</el-button>
    <el-button class="item" type="primary">主要按钮</el-button>
    <el-button  class="item" type="success">成功按钮</el-button>
    <el-button class="item" type="info">信息按钮</el-button>
  </div>
</template>

<script>
  export default {
    name: "liu",
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        input5:'',
        select:''
      }
    }
  }
</script>

<style lang="less" scoped>
.CCTV {
  .item{
    float: left;
    margin-left: 20px;
    text-align: center;
  }
}
</style>
