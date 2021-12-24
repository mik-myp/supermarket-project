<template>
  <el-container class="container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Userside></Userside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Userside from "../../components/side/Userside.vue";
import Header from "../../components/common/Header.vue";
export default {
  components: {
    Userside,
    Header,
  },
};
</script>

<style>
.container {
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;

  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
}

.el-main {
  background-color: #e9eef3;
}
</style>