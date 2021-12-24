<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item index="/userhome">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <el-menu-item index="/usergoodslist">
      <i class="el-icon-s-home"></i>
      <span slot="title">商品列表</span>
    </el-menu-item>
    <el-menu-item index="/shoppingcar">
      <i class="el-icon-s-home"></i>
      <span slot="title">购物车</span>
    </el-menu-item>
  </el-menu>
</template>


<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-menu {
  border-right: none;
}
</style>