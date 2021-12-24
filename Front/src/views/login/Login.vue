<template>
  <div>
    <div id="building"></div>
    <div class="login">
      <div class="name">
        账号：
        <el-input placeholder="请输入账号" v-model="username" clearable>
        </el-input>
      </div>
      <div class="password">
        密码：
        <el-input placeholder="请输入密码" v-model="password" show-password>
        </el-input>
      </div>
      <div class="choice">
        <el-radio-group v-model="radio">
          <el-radio :label="1">超级管理员</el-radio>
          <el-radio :label="2">普通管理员</el-radio>
          <el-radio :label="3">用户</el-radio>
        </el-radio-group>
      </div>
      <div class="button">
        <el-button type="primary" @click="login(username, password)"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      radio: 1,
    };
  },

  methods: {
    login(username, password) {
      if (this.radio == 1) {
        this.loginsuperadmin(username, password);
      }
      if (this.radio == 2) {
        this.loginadmin(username, password);
      }
      if (this.radio == 3) {
        this.loginuser(username, password);
      }
    },
    async loginsuperadmin(sname, spassword) {
      console.log(sname, spassword);
      const { data } = await axios({
        url: "/superadmin/loginsuperadmin",
        method: "post",
        data: {
          sname,
          spassword,
        },
      });
      console.log(data);
      if (data.status) {
        window.localStorage.setItem("superadminusername", this.username);
        window.localStorage.setItem("superadminpassword", this.password);
        this.$message({
          message: data.message,
          type: "success",
        });
        this.$router.push("/superadminsystem");
      } else {
        this.$message.error(data.message);
      }
    },
    async loginadmin(aname, apassword) {
      console.log(aname, apassword);
      const { data } = await axios({
        url: "/admins/loginadmin",
        method: "post",
        data: {
          aname,
          apassword,
        },
      });
      console.log(data);
      if (data.status) {
        window.localStorage.setItem("adminusername", this.username);
        window.localStorage.setItem("adminpassword", this.password);
        this.$message({
          message: data.message,
          type: "success",
        });
        this.$router.push("/adminsystem");
      } else {
        this.$message.error(data.message);
      }
    },
    async loginuser(uname, upassword) {
      console.log(uname, upassword);
      const { data } = await axios({
        url: "/users/loginusers",
        method: "post",
        data: {
          uname,
          upassword,
        },
      });
      console.log(data);
      if (data.status) {
        window.localStorage.setItem("userusername", this.username);
        window.localStorage.setItem("userpassword", this.password);
        this.$message({
          message: data.message,
          type: "success",
        });
        this.$router.push("/usersystem");
      } else {
        this.$message.error(data.message);
      }
    },
  },
};
</script>

<style>
.login {
  width: 100%;
  margin: 300px auto;
  text-align: center;
  z-index: 1;
  position: absolute;
}

.el-input {
  width: 15%;
}
.name,
.password,
.choice,
.button {
  margin-top: 20px;
}
#building {
  background: url("../../assets/background.jpg");
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
}
</style>