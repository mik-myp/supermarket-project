<template>
  <div>
    <i class="el-icon-s-shop"></i>
    <span class="name">超市管理系统</span>
    <el-button class="info" type="text" @click="back">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.info {
  float: right;
  margin-top: 7px;
}
.name,
.info {
  text-align: center;

  font-size: 20px;
  margin-left: 5px;
}
.el-icon-s-shop {
  font-size: 20px;
}
</style>