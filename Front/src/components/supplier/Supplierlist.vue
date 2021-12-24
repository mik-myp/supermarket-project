<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>供应商管理</el-breadcrumb-item>
      <el-breadcrumb-item>供应商列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="
        supplierData.supplierList.filter(
          (data) =>
            !search ||
            data.sid.toLowerCase().includes(search.toLowerCase()) ||
            data.sname.toLowerCase().includes(search.toLowerCase()) ||
            data.saddress.toLowerCase().includes(search.toLowerCase()) ||
            data.stelephone.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
      height="800"
    >
      <el-table-column label="供应商编号" prop="sid" sortable>
      </el-table-column>
      <el-table-column label="供应商名字" prop="sname" sortable>
      </el-table-column>
      <el-table-column label="供应商地址" prop="saddress" sortable>
      </el-table-column>
      <el-table-column label="供应商手机号" prop="stelephone" sortable>
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
              <el-form-item label="供应商编号" :label-width="formLabelWidth">
                <el-input v-model="form.sid" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="供应商名字" :label-width="formLabelWidth">
                <el-input v-model="form.sname" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="供应商地址" :label-width="formLabelWidth">
                <el-input v-model="form.saddress" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="供应商手机号" :label-width="formLabelWidth">
                <el-input
                  v-model="form.stelephone"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="(dialogFormVisible = false), updatesupplier(form._id)"
                >确 定</el-button
              >
            </div>
          </el-dialog>
          <el-button
            size="mini"
            type="danger"
            @click="
              handleDelete(scope.$index, scope.row),
                deletesupplier(scope.row._id)
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
      supplierData: {
        supplierList: [],
      },
      search: "",
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        sid: "",
        sname: "",
        saddress: "",
        stelephone: "",
      },
    };
  },
  mounted() {
    this.supplierList();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.form = row;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    async supplierList() {
      const { data } = await axios({
        url: "/supplier/supplierList",
        method: "get",
      });

      if (data.status) {
        this.supplierData = data.data;
      }
      console.log(data);
    },
    async deletesupplier(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/supplier/deletesupplier",
        method: "post",
        data: {
          _id,
        },
      });
      console.log(data);
      this.supplierList();
      if (data.status) {
        this.$message({
          message: data.message,
          type: "success",
        });
      } else {
        this.$message.error(data.message);
      }
    },

    async updatesupplier(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/supplier/updatesupplier",
        method: "post",
        data: {
          _id,
          supplier: this.form,
        },
      });
      console.log(data);
      this.supplierList();
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