<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品类型列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="
        goodstypeData.goodstypeList.filter(
          (data) =>
            !search ||
            data.tid.toLowerCase().includes(search.toLowerCase()) ||
            data.tname.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
      height="800"
    >
      <el-table-column label="商品类型编号" prop="tid" sortable>
      </el-table-column>
      <el-table-column label="商品类型名字" prop="tname" sortable>
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
            >修改</el-button
          >
          <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="商品类型编号" :label-width="formLabelWidth">
                <el-input v-model="form.tid" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="商品类型名字" :label-width="formLabelWidth">
                <el-input v-model="form.tname" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="(dialogFormVisible = false), updategoodstype(form._id)"
                >确 定</el-button
              >
            </div>
          </el-dialog>
          <el-button
            size="mini"
            type="danger"
            @click="
              handleDelete(scope.$index, scope.row),
                deletegoodstype(scope.row._id)
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
      goodstypeData: {
        goodstypeList: [],
      },
      search: "",
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        tid: "",
        tname: "",
      },
    };
  },
  mounted() {
    this.goodstypeList();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.form = row;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    async goodstypeList() {
      const { data } = await axios({
        url: "/goodstype/goodstypeList",
        method: "get",
      });

      if (data.status) {
        this.goodstypeData = data.data;
      }
      console.log(data);
    },
    async deletegoodstype(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/goodstype/deletegoodstype",
        method: "post",
        data: {
          _id,
        },
      });
      console.log(data);
      this.goodstypeList();
      if (data.status) {
        this.$message({
          message: data.message,
          type: "success",
        });
      } else {
        this.$message.error(data.message);
      }
    },

    async updategoodstype(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/goodstype/updategoodstype",
        method: "post",
        data: {
          _id,
          goodstype: this.form,
        },
      });
      console.log(data);
      this.goodstypeList();
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