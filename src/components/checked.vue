<template>
  <div>
    <label v-for="(item,index) in arr">
      <input type="checkbox" v-model="childValue" :value="item.value">
      <span>{{item.label}}</span>
    </label>
  </div>
</template>

<script>
  export default {
    name: "checked",
    props: {
      options: {
        type: Array,
        require: true
      },
      checked: {
        type: Array,
        require: true
      }
    },
    mounted() {
      this.arr = this.options
    },
    data() {
      return {
        arr: [],
        childValue: []
      }
    },
    watch: {
      options(val) {
        this.arr = val
      },
      checked(val) {
        this.childValue = val
      },
      childValue(val) {
        this.$emit("input", val)
      }
    }
  }
</script>

<style scoped>

</style>
