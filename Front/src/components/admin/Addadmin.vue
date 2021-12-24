<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加管理员</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="编号" prop="aid">
        <el-input v-model="ruleForm.aid"></el-input>
      </el-form-item>
      <el-form-item label="名字" prop="aname">
        <el-input v-model="ruleForm.aname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="apassword">
        <el-input v-model="ruleForm.apassword"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="aage">
        <el-input v-model="ruleForm.aage"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="asex">
        <el-radio-group v-model="ruleForm.asex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电话" prop="atelephone">
        <el-input v-model="ruleForm.atelephone"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="aaddress">
        <el-input v-model="ruleForm.aaddress"></el-input>
      </el-form-item>
      <el-form-item label="职位" prop="adepartment">
        <el-select v-model="ruleForm.adepartment" placeholder="请选择职位">
          <template v-for="item in departmentData.departmentList">
            <el-option :label="item.dname" :value="item.dname"></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm'), addadmin(ruleForm)"
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
        aid: "",
        aname: "",
        apassword: "",
        aage: "",
        asex: "男",
        atelephone: "",
        aaddress: "",
        adepartment: "",
      },
      departmentData: {
        departmentList: [],
      },
      rules: {
        aid: [{ required: true, message: "请输入编号", trigger: "change" }],
        aname: [{ required: true, message: "请输入用户名称", trigger: "blur" }],
        apassword: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
        aage: [{ required: true, message: "请输入年龄", trigger: "change" }],
        asex: [{ required: true, message: "请选择性别", trigger: "change" }],
        atelephone: [
          { required: true, message: "请选择性别", trigger: "change" },
        ],

        aaddress: [
          { required: true, message: "请输入地址", trigger: "change" },
        ],
        adepartment: [
          { required: true, message: "请选择职位", trigger: "change" },
        ],
      },
      message: "",
    };
  },
  mounted() {
    this.departmentList();
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

    async addadmin(admin) {
      console.log(admin);
      const { data } = await axios({
        url: "/admins/addadmin",
        method: "post",
        data: {
          admin,
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
    async departmentList() {
      const { data } = await axios({
        url: "/department/departmentList",
        method: "get",
      });

      if (data.status) {
        this.departmentData = data.data;
      }
      console.log(data);
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