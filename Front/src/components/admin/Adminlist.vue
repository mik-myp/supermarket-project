<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="
        adminsData.adminsList.filter(
          (data) =>
            !search ||
            data.aid.toLowerCase().includes(search.toLowerCase()) ||
            data.aname.toLowerCase().includes(search.toLowerCase()) ||
            data.aage.toLowerCase().includes(search.toLowerCase()) ||
            data.aage.toLowerCase().includes(search.toLowerCase()) ||
            data.asex.toLowerCase().includes(search.toLowerCase()) ||
            data.atelephone.toLowerCase().includes(search.toLowerCase()) ||
            data.aaddress.toLowerCase().includes(search.toLowerCase()) ||
            data.adepartment.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
      height="800"
    >
      <el-table-column label="编号" prop="aid" sortable> </el-table-column>
      <el-table-column label="名字" prop="aname" sortable> </el-table-column>

      <el-table-column label="年龄" prop="aage" sortable> </el-table-column>
      <el-table-column label="性别" prop="asex" sortable> </el-table-column>
      <el-table-column label="电话" prop="atelephone" sortable>
      </el-table-column>

      <el-table-column label="地址" prop="aaddress" sortable> </el-table-column>
      <el-table-column
        label="职位"
        prop="adepartment"
        sortable
      ></el-table-column>

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
                <el-input v-model="form.aid" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="名字" :label-width="formLabelWidth">
                <el-input v-model="form.aname" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="年龄" :label-width="formLabelWidth">
                <el-input v-model="form.aage" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别" :label-width="formLabelWidth">
                <el-select v-model="form.asex" placeholder="请选择性别">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input
                  v-model="form.atelephone"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input v-model="form.aaddress" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="职位" :label-width="formLabelWidth">
                <el-select v-model="form.adepartment" placeholder="请选择职位">
                  <template v-for="item in departmentData.departmentList">
                    <el-option
                      :label="item.dname"
                      :value="item.dname"
                    ></el-option>
                  </template>
                </el-select>
              </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="(dialogFormVisible = false), updateadmin(form._id)"
                >确 定</el-button
              >
            </div>
          </el-dialog>

          <el-button
            size="mini"
            type="danger"
            @click="
              handleDelete(scope.$index, scope.row), deleteadmin(scope.row._id)
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
      adminsData: {
        adminsList: [],
      },
      departmentData: {
        departmentList: [],
      },
      search: "",
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        aid: "",
        aname: "",
        apassword: "",
        aage: "",
        asex: "",
        atelephone: "",
        aaddress: "",
        adepartment: "",
      },
    };
  },
  mounted() {
    this.adminsList();
    this.departmentList();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.form = row;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    async adminsList() {
      const { data } = await axios({
        url: "/admins/adminsList",
        method: "get",
      });

      if (data.status) {
        this.adminsData = data.data;
      }
      console.log(data);
    },

    async deleteadmin(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/admins/deleteadmin",
        method: "post",
        data: {
          _id,
        },
      });
      console.log(data);
      this.adminsList();
      if (data.status) {
        this.$message({
          message: data.message,
          type: "success",
        });
      } else {
        this.$message.error(data.message);
      }
    },

    async updateadmin(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/admins/updateadmin",
        method: "post",
        data: {
          _id,
          admin: this.form,
        },
      });
      console.log(data);
      this.adminsList();
      if (data.status) {
        this.$message({
          message: data.message,
          type: "success",
        });
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