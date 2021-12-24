<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="
        goodsData.goodsList.filter(
          (data) =>
            !search ||
            data.gid.toLowerCase().includes(search.toLowerCase()) ||
            data.gtype.toLowerCase().includes(search.toLowerCase()) ||
            data.gname.toLowerCase().includes(search.toLowerCase()) ||
            data.gprice.toLowerCase().includes(search.toLowerCase()) ||
            data.gstock.toLowerCase().includes(search.toLowerCase()) ||
            data.gsupplier.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
      height="800"
    >
      <el-table-column label="商品种类编号" prop="gtypeid" sortable>
      </el-table-column>
      <el-table-column label="商品种类" prop="gtype" sortable>
      </el-table-column>
      <el-table-column label="商品编号" prop="gid" sortable> </el-table-column>
      <el-table-column label="商品名字" prop="gname" sortable>
      </el-table-column>
      <el-table-column label="商品价格" prop="gprice" sortable>
      </el-table-column>
      <el-table-column label="商品数量" prop="gstock" sortable>
      </el-table-column>
      <el-table-column label="商品供应商" prop="gsupplier" sortable>
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
            type="primary"
            >修改</el-button
          >
          <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="商品类型编号" :label-width="formLabelWidth">
                <el-input v-model="form.gtypeid" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="商品类型" :label-width="formLabelWidth">
                <el-input v-model="form.gtype" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="商品编号" :label-width="formLabelWidth">
                <el-input v-model="form.gid" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="商品名字" :label-width="formLabelWidth">
                <el-input v-model="form.gname" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="商品价格" :label-width="formLabelWidth">
                <el-input v-model="form.gprice" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="商品数量" :label-width="formLabelWidth">
                <el-input v-model="form.gstock" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="商品供应商" :label-width="formLabelWidth">
                <el-select
                  v-model="form.gsupplier"
                  placeholder="请选择活动区域"
                >
                  <template v-for="item in supplierData.supplierList">
                    <el-option
                      :label="item.sname"
                      :value="item.sname"
                    ></el-option>
                  </template>
                </el-select>
              </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="(dialogFormVisible = false), updategoods(form._id)"
                >确 定</el-button
              >
            </div>
          </el-dialog>
          <el-button
            size="mini"
            type="danger"
            @click="
              handleDelete(scope.$index, scope.row), deletegoods(scope.row._id)
            "
            >删除</el-button
          >
          <el-button
            size="mini"
            @click="
              handleDelete(scope.$index, scope.row),
                returngoods(scope.row),
                deletegoodser(scope.row._id)
            "
            type="warning"
            >退货</el-button
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
      goodsData: {
        goodsList: [],
      },
      supplierData: {
        supplierList: [],
      },
      search: "",
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        gtypeid: "",
        gtype: "",
        gid: "",
        gname: "",
        gprice: "",
        gstock: "",
        gsupplier: "",
      },
    };
  },
  mounted() {
    this.goodsList();
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

    async goodsList() {
      const { data } = await axios({
        url: "/goods/goodsList",
        method: "get",
      });

      if (data.status) {
        this.goodsData = data.data;
      }
      console.log(data);
    },
    async deletegoods(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/goods/deletegoods",
        method: "post",
        data: {
          _id,
        },
      });
      console.log(data);
      this.goodsList();
      if (data.status) {
        this.$message({
          message: data.message,
          type: "success",
        });
      } else {
        this.$message.error(data.message);
      }
    },
    async deletegoodser(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/goods/deletegoods",
        method: "post",
        data: {
          _id,
        },
      });
      console.log(data);
      this.goodsList();
    },

    async updategoods(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/goods/updategoods",
        method: "post",
        data: {
          _id,
          goods: this.form,
        },
      });
      console.log(data);
      this.goodsList();
      if (data.status) {
        this.$message({
          message: data.message,
          type: "success",
        });
      } else {
        this.$message.error(data.message);
      }
    },
    async returngoods(returngoods) {
      console.log(returngoods);
      const { data } = await axios({
        url: "/returngoods/addreturngoods",
        method: "post",
        data: {
          returngoods,
        },
      });
      console.log(data);
      this.goodsList();
      if (data.status) {
        this.$message({
          message: data.message,
          type: "success",
        });
      } else {
        this.$message.error(data.message);
      }
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
.el-button + .el-button {
  margin-left: 0;
}
.el-table .cell {
  width: 225px;
}
.el-breadcrumb {
  font-size: 14px;
  line-height: 1;
  margin-bottom: 10px;
}
</style>