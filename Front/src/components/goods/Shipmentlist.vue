<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>出货商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="
        buygoodsData.buygoodsList.filter(
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

        <!-- <template slot-scope="scope">
        <el-button
          size="mini"
          @click="
            handleDelete(scope.$index, scope.row),
              returngoods(scope.row),
              deletebuygoods(scope.row._id)
          "
          type="warning"
          >删除</el-button
        >
      </template> -->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      buygoodsData: {
        buygoodsList: [],
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
    this.buygoodsList();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.form = row;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    async buygoodsList() {
      const { data } = await axios({
        url: "/goods/buygoodsList",
        method: "get",
      });

      if (data.status) {
        this.buygoodsData = data.data;
      }
      console.log(data);
    },
    // async deletebuygoods(_id) {
    //   console.log(_id);
    //   const { data } = await axios({
    //     url: "/goods/deletebuygoods",
    //     method: "post",
    //     data: {
    //       _id,
    //     },
    //   });
    //   console.log(data);
    //   this.buygoodsList();
    //   if (data.status) {
    //     this.$message.success(data.message);
    //   } else {
    //     this.$message.error(data.message);
    //   }
    // },

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