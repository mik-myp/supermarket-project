<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item>职位列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="
        departmentData.departmentList.filter(
          (data) =>
            !search ||
            data.did.toLowerCase().includes(search.toLowerCase()) ||
            data.dname.toLowerCase().includes(search.toLowerCase()) ||
            data.dtelephone.toLowerCase().includes(search.toLowerCase()) ||
            data.daddress.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
      height="800"
    >
      <el-table-column label="职位编号" prop="did" sortable> </el-table-column>
      <el-table-column label="职位名字" prop="dname" sortable>
      </el-table-column>
      <el-table-column label="职位电话" prop="dtelephone" sortable>
      </el-table-column>
      <el-table-column label="职位办公位置" prop="daddress" sortable>
      </el-table-column>

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
              <el-form-item label="职位编号" :label-width="formLabelWidth">
                <el-input v-model="form.did" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="职位名字" :label-width="formLabelWidth">
                <el-input v-model="form.dname" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="职位电话" :label-width="formLabelWidth">
                <el-input
                  v-model="form.dtelephone"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="职位办公位置" :label-width="formLabelWidth">
                <el-input v-model="form.daddress" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="(dialogFormVisible = false), updatedepartment(form._id)"
                >确 定</el-button
              >
            </div>
          </el-dialog>
          <el-button
            size="mini"
            type="danger"
            @click="
              handleDelete(scope.$index, scope.row),
                deletedepartment(scope.row._id)
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
      departmentData: {
        departmentList: [],
      },
      search: "",
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        did: "",
        dname: "",
        dtelephone: "",
        daddress: "",
      },
    };
  },
  mounted() {
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
    async deletedepartment(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/department/deletedepartment",
        method: "post",
        data: {
          _id,
        },
      });
      console.log(data);
      this.departmentList();
      if (data.status) {
        this.$message({
          message: data.message,
          type: "success",
        });
      } else {
        this.$message.error(data.message);
      }
    },

    async updatedepartment(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/department/updatedepartment",
        method: "post",
        data: {
          _id,
          department: this.form,
        },
      });
      console.log(data);
      this.departmentList();
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