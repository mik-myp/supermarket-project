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
    <el-menu-item index="/adminhome">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-goods"></i>
        <span>商品管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/admingoodstypelist">
          <i class="el-icon-menu"></i>
          <span slot="title">商品类型列表</span>
        </el-menu-item>
        <el-menu-item index="/adminaddgoodstype">
          <i class="el-icon-menu"></i>
          <span slot="title">添加商品类型</span>
        </el-menu-item>
        <el-menu-item index="/admingoodslist">
          <i class="el-icon-menu"></i>
          <span slot="title">商品列表</span>
        </el-menu-item>
        <el-menu-item index="/adminaddgoods">
          <i class="el-icon-menu"></i>
          <span slot="title">添加商品</span>
        </el-menu-item>
        <el-menu-item index="/adminreturngoodslist">
          <i class="el-icon-menu"></i>
          <span slot="title">退货商品列表</span>
        </el-menu-item>
        <el-menu-item index="/adminshipmentlist">
          <i class="el-icon-menu"></i>
          <span slot="title">出货商品列表</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
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