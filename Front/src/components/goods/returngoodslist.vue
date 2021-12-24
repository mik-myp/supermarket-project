<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>退货商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="
        returngoodsData.returngoodsList.filter(
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
              handleDelete(scope.$index, scope.row),
                returngoods(scope.row),
                deletereturngoods(scope.row._id)
            "
            type="warning"
            >恢复</el-button
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
      returngoodsData: {
        returngoodsList: [],
      },
      search: "",
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
    this.returngoodsList();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.form = row;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    async returngoodsList() {
      const { data } = await axios({
        url: "/returngoods/returngoodsList",
        method: "get",
      });

      if (data.status) {
        this.returngoodsData = data.data;
      }
      console.log(data);
    },
    async deletereturngoods(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/returngoods/deletereturngoods",
        method: "post",
        data: {
          _id,
        },
      });
      console.log(data);
      this.returngoodsList();
    },
    async returngoods(goods) {
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
        this.$message.success("商品恢复成功");
      } else {
        this.$message.error("商品恢复失败");
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