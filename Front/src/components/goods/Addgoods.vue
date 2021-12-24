<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品类型编号" prop="gtypeid">
        <el-input v-model="ruleForm.gtypeid"></el-input>
      </el-form-item>
      <el-form-item label="商品类型" prop="gtype">
        <el-input v-model="ruleForm.gtype"></el-input>
      </el-form-item>
      <el-form-item label="商品编号" prop="gid">
        <el-input v-model="ruleForm.gid"></el-input>
      </el-form-item>
      <el-form-item label="商品名字" prop="gname">
        <el-input v-model="ruleForm.gname"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="gprice">
        <el-input v-model="ruleForm.gprice"></el-input>
      </el-form-item>
      <el-form-item label="商品数量" prop="gstock">
        <el-input v-model="ruleForm.gstock"></el-input>
      </el-form-item>
      <el-form-item label="商品供应商" prop="gsupplier">
        <el-input v-model="ruleForm.gsupplier"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm'), addgoods(ruleForm)"
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
        gid: "",
        gtype: "",
        gname: "",
        gprice: "",
        gstock: "",
        gsupplier: "",
        gtypeid: "",
      },
      rules: {
        gid: [{ required: true, message: "请输入商品编号", trigger: "change" }],
        gtype: [
          { required: true, message: "请输入商品类型", trigger: "change" },
        ],
        gname: [
          { required: true, message: "请输入商品名字", trigger: "change" },
        ],
        gprice: [
          { required: true, message: "请输入商品价格", trigger: "change" },
        ],
        gstock: [
          { required: true, message: "请输入商品数量", trigger: "change" },
        ],
        gsupplier: [
          { required: true, message: "请输入商品供应商", trigger: "change" },
        ],
        gtypeid: [
          { required: true, message: "请输入商品类型编号", trigger: "change" },
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
    async addgoods(goods) {
      console.log(goods);
      const { data } = await axios({
        url: "/goods/addgoods",
        method: "post",
        data: {
          goods,
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