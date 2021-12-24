<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加用户</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="编号" prop="uid">
        <el-input v-model="ruleForm.uid"></el-input>
      </el-form-item>
      <el-form-item label="名字" prop="uname">
        <el-input v-model="ruleForm.uname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="upassword">
        <el-input v-model="ruleForm.upassword"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="uage">
        <el-input v-model="ruleForm.uage"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="usex">
        <el-radio-group v-model="ruleForm.usex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电话" prop="utelephone">
        <el-input v-model="ruleForm.utelephone"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="uaddress">
        <el-input v-model="ruleForm.uaddress"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="uaddress">
        <el-input v-model="ruleForm.uremarks"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm'), addusers(ruleForm)"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ruleForm: {
        uid: "",
        uname: "",
        upassword: "",
        uage: "",
        usex: "男",
        utelephone: "",
        uaddress: "",
        uremarks: "",
      },

      rules: {
        uid: [{ required: true, message: "请输入编号", trigger: "change" }],
        uname: [{ required: true, message: "请输入用户名称", trigger: "blur" }],
        upassword: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
        uage: [{ required: true, message: "请输入年龄", trigger: "change" }],
        usex: [{ required: true, message: "请选择性别", trigger: "change" }],
        utelephone: [
          { required: true, message: "请选择性别", trigger: "change" },
        ],

        uaddress: [
          { required: true, message: "请输入地址", trigger: "change" },
        ],
        uremarks: [
          { required: true, message: "请输入备注", trigger: "change" },
        ],
      },
      message: "",
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert(this.message);
          console.log(this.ruleForm);
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    async addusers(users) {
      console.log(users);
      const { data } = await axios({
        url: "/users/addusers",
        method: "post",
        data: {
          users,
        },
      });
      console.log(data);
      // alert(data.message);
      if (data.status) {
        this.$message.success(data.message);
      } else {
        this.$message.error(data.message);
      }
    },
  },
};
</script>

<style>
.el-form {
  margin: 60px 90px;
}
.el-input {
  width: 300px;
}
.el-select {
  width: 200px;
}
.el-breadcrumb {
  font-size: 14px;
  line-height: 1;
  margin-bottom: 10px;
}
</style>