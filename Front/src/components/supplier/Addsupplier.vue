<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>供应商管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加供应商</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="供应商编号" prop="sid">
        <el-input v-model="ruleForm.sid"></el-input>
      </el-form-item>
      <el-form-item label="供应商名字" prop="sname">
        <el-input v-model="ruleForm.sname"></el-input>
      </el-form-item>
      <el-form-item label="供应商地址" prop="saddress">
        <el-input v-model="ruleForm.saddress"></el-input>
      </el-form-item>
      <el-form-item label="供应商电话" prop="stelephone">
        <el-input v-model="ruleForm.stelephone"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm'), addsupplier(ruleForm)"
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
        sid: "",
        sname: "",
        saddress: "",
        stelephone: "",
      },
      rules: {
        sid: [
          { required: true, message: "请输入供应商编号", trigger: "change" },
        ],
        sname: [
          { required: true, message: "请输入供应商名称", trigger: "blur" },
        ],
        saddress: [
          { required: true, message: "请输入供应商地址", trigger: "change" },
        ],
        stelephone: [
          { required: true, message: "请输入供应商电话", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
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
    async addsupplier(supplier) {
      console.log(supplier);
      const { data } = await axios({
        url: "/supplier/addsupplier",
        method: "post",
        data: {
          supplier,
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