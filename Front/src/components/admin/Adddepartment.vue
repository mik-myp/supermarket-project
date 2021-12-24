<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加职位</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="职位编号" prop="did">
        <el-input v-model="ruleForm.did"></el-input>
      </el-form-item>
      <el-form-item label="职位名字" prop="dname">
        <el-input v-model="ruleForm.dname"></el-input>
      </el-form-item>
      <el-form-item label="职位电话" prop="dtelephone">
        <el-input v-model="ruleForm.dtelephone"></el-input>
      </el-form-item>
      <el-form-item label="职位办公位置" prop="daddress">
        <el-input v-model="ruleForm.daddress"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm'), adddepartment(ruleForm)"
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
        did: "",
        dname: "",
        dtelephone: "",
        daddress: "",
      },
      rules: {
        did: [{ required: true, message: "请输入编号", trigger: "change" }],
        dname: [{ required: true, message: "请输入用户名称", trigger: "blur" }],
        dtelephone: [
          { required: true, message: "请选择性别", trigger: "change" },
        ],
        daddress: [
          { required: true, message: "请输入地址", trigger: "change" },
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
          // console.log(this.ruleForm);
          // console.log(this.ruleForm.dname);
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    async adddepartment(department) {
      console.log(department);
      const { data } = await axios({
        url: "/department/adddepartment",
        method: "post",
        data: {
          department,
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
.el-form-item__label {
  font-size: 13px;
}
.el-breadcrumb {
  font-size: 14px;
  line-height: 1;
  margin-bottom: 10px;
}
</style>