<template>
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
    <el-table-column label="商品种类" prop="gtype" sortable> </el-table-column>
    <el-table-column label="商品编号" prop="gid" sortable> </el-table-column>
    <el-table-column label="商品名字" prop="gname" sortable> </el-table-column>
    <el-table-column label="商品价格" prop="gprice" sortable> </el-table-column>
    <el-table-column label="商品数量" prop="gstock" sortable> </el-table-column>
    <el-table-column label="商品供应商" prop="gsupplier" sortable>
    </el-table-column>

    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>

      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleDelete(scope.$index, scope.row), buygoods(scope.row)"
          type="warning"
          >购买</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      goodsData: {
        goodsList: [],
      },
      search: "",
      dialogFormVisible: false,
      formLabelWidth: "120px",
    };
  },
  mounted() {
    this.goodsList();
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

    async buygoods(goods) {
      console.log(goods);
      const { data } = await axios({
        url: "/goods/buygoods",
        method: "post",
        data: {
          goods,
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