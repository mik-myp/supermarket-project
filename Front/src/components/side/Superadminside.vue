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
    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-user-solid"></i>
        <span>管理员管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/adminlist">
          <i class="el-icon-menu"></i>
          <span slot="title">管理员列表</span>
        </el-menu-item>
        <el-menu-item index="/addadmin">
          <i class="el-icon-menu"></i>
          <span slot="title">添加管理员</span>
        </el-menu-item>
        <el-menu-item index="/departmentlist">
          <i class="el-icon-menu"></i>
          <span slot="title">职位列表</span>
        </el-menu-item>
        <el-menu-item index="/adddepartment">
          <i class="el-icon-menu"></i>
          <span slot="title">添加职位</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-user-solid"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/userlist">
          <i class="el-icon-menu"></i>
          <span slot="title">用户列表</span>
        </el-menu-item>
        <el-menu-item index="/adduser">
          <i class="el-icon-menu"></i>
          <span slot="title">添加用户</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-s-goods"></i>
        <span>商品管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/goodstypelist">
          <i class="el-icon-menu"></i>
          <span slot="title">商品类型列表</span>
        </el-menu-item>
        <el-menu-item index="/addgoodstype">
          <i class="el-icon-menu"></i>
          <span slot="title">添加商品类型</span>
        </el-menu-item>
        <el-menu-item index="/goodslist">
          <i class="el-icon-menu"></i>
          <span slot="title">商品列表</span>
        </el-menu-item>
        <el-menu-item index="/addgoods">
          <i class="el-icon-menu"></i>
          <span slot="title">添加商品</span>
        </el-menu-item>
        <el-menu-item index="/returngoodslist">
          <i class="el-icon-menu"></i>
          <span slot="title">退货商品列表</span>
        </el-menu-item>
        <el-menu-item index="/shipmentlist">
          <i class="el-icon-menu"></i>
          <span slot="title">出货商品列表</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-s-cooperation"></i>
        <span>供应商管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/supplierlist">
          <i class="el-icon-menu"></i>
          <span slot="title">供应商列表</span>
        </el-menu-item>
        <el-menu-item index="/addsupplier">
          <i class="el-icon-menu"></i>
          <span slot="title">添加供应商</span>
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