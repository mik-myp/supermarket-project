<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="
        usersData.usersList.filter(
          (data) =>
            !search ||
            data.uid.toLowerCase().includes(search.toLowerCase()) ||
            data.uname.toLowerCase().includes(search.toLowerCase()) ||
            data.uage.toLowerCase().includes(search.toLowerCase()) ||
            data.usex.toLowerCase().includes(search.toLowerCase()) ||
            data.utelephone.toLowerCase().includes(search.toLowerCase()) ||
            data.uaddress.toLowerCase().includes(search.toLowerCase()) ||
            data.uremarks.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
      height="800"
    >
      <el-table-column label="编号" prop="uid" sortable> </el-table-column>
      <el-table-column label="名字" prop="uname" sortable> </el-table-column>

      <el-table-column label="年龄" prop="uage" sortable> </el-table-column>
      <el-table-column label="性别" prop="usex" sortable> </el-table-column>
      <el-table-column label="电话" prop="utelephone" sortable>
      </el-table-column>

      <el-table-column label="地址" prop="uaddress" sortable> </el-table-column>

      <el-table-column label="备注" prop="uremarks" sortable> </el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>

        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="
              handleEdit(scope.$index, scope.row), (dialogFormVisible = true)
            "
          >
            修改
          </el-button>
          <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="编号" :label-width="formLabelWidth">
                <el-input v-model="form.uid" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="名字" :label-width="formLabelWidth">
                <el-input v-model="form.uname" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="年龄" :label-width="formLabelWidth">
                <el-input v-model="form.uage" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别" :label-width="formLabelWidth">
                <el-select v-model="form.usex" placeholder="请选择性别">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input
                  v-model="form.utelephone"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input v-model="form.uaddress" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="备注" :label-width="formLabelWidth">
                <el-input v-model="form.uremarks" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="(dialogFormVisible = false), updateusers(form._id)"
                >确 定</el-button
              >
            </div>
          </el-dialog>

          <el-button
            size="mini"
            type="danger"
            @click="
              handleDelete(scope.$index, scope.row), deleteusers(scope.row._id)
            "
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
    

<script>
import axios from "axios";
export default {
  data() {
    return {
      usersData: {
        usersList: [],
      },

      search: "",
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        uid: "",
        uname: "",
        upassword: "",
        uage: "",
        usex: "",
        utelephone: "",
        uaddress: "",
        uremarks: "",
      },
    };
  },
  mounted() {
    this.usersList();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.form = row;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    async usersList() {
      const { data } = await axios({
        url: "/users/usersList",
        method: "get",
      });

      if (data.status) {
        this.usersData = data.data;
      }
      console.log(data);
    },

    async deleteusers(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/users/deleteusers",
        method: "post",
        data: {
          _id,
        },
      });
      console.log(data);
      this.usersList();
      if (data.status) {
        this.$message({
          message: data.message,
          type: "success",
        });
      } else {
        this.$message.error(data.message);
      }
    },

    async updateusers(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/users/updateusers",
        method: "post",
        data: {
          _id,
          users: this.form,
        },
      });
      console.log(data);
      this.usersList();
      if (data.status) {
        this.$message({
          message: data.message,
          type: "success",
        });
      } else {
        this.$message.error(data.message);
      }
    },
  },
};
</script>

<style>
.el-button {
  margin-right: 7px;
}
.el-table .el-table__cell.is-right {
  text-align: left;
}
.el-breadcrumb {
  font-size: 14px;
  line-height: 1;
  margin-bottom: 10px;
}
</style>