exports.install = function (Vue, options) {
  Vue.prototype.sendMsg = function () {//全局函数1
    alert('执行成功1');
  };
  Vue.prototype.getMsg = function () {//全局函数2
    alert('执行成功2');
  };
};
