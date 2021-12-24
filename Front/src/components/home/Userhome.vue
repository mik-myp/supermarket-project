<template>
  <el-row>
    <el-col :span="12">
      <el-table :data="usersData.usersList" border style="width: 100%">
        <el-table-column prop="uname" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="usex" label="性别" width="180">
        </el-table-column>
        <el-table-column prop="uage" label="年龄" width="180">
        </el-table-column>
        <el-table-column prop="utelephone" label="联系方式"> </el-table-column>
      </el-table>
      <el-table :data="usersData.usersList" border style="width: 100%">
        <el-table-column prop="uremarks" label="备注" width="180">
        </el-table-column>
        <el-table-column prop="uaddress" label="联系地址"> </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button
              type="success"
              round
              class="update"
              @click="
                handleEdit(scope.$index, scope.row), (dialogFormVisible = true)
              "
            >
              修改
            </el-button>
            <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                  <el-input v-model="form.uname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                  <el-select v-model="form.usex" placeholder="请选择性别">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth">
                  <el-input v-model="form.uage" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" :label-width="formLabelWidth">
                  <el-input
                    v-model="form.utelephone"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                  <el-input
                    v-model="form.uremarks"
                    autocomplete="off"
                    :disabled="true"
                  ></el-input>
                </el-form-item>
                <el-form-item label="联系地址" :label-width="formLabelWidth">
                  <el-input
                    v-model="form.uaddress"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button
                  type="primary"
                  @click="(dialogFormVisible = false), updateuser(form._id)"
                  >确 定</el-button
                >
              </div>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
      <el-carousel indicator-position="outside" class="image">
        <el-carousel-item v-for="item in srclist" :key="item">
          <el-image :src="item"></el-image>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <el-calendar v-model="value"> </el-calendar>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      srclist: [
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic119.huitu.com%2Fres%2F20190505%2F748431_20190505143417303018_1.jpg&refer=http%3A%2F%2Fpic119.huitu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637131612&t=7bd7b5403f985758caffd5ec07a4ff63",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic122.huitu.com%2Fres%2F20190609%2F549219_20190609154625776070_1.jpg&refer=http%3A%2F%2Fpic122.huitu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637131586&t=107248f3c3833f4dcce528516e869b63",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic119.huitu.com%2Fres%2F20190504%2F748431_20190504160729724015_1.jpg&refer=http%3A%2F%2Fpic119.huitu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637131539&t=382be655dc4df43dedace2596779f378",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp141481003.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637131428&t=fd0d0d9b006fe8040816133b0f0df4e5",
      ],
      usersData: {
        usersList: [],
      },
      value: new Date(),
      userusername: window.localStorage.getItem("userusername"),
      userpassword: window.localStorage.getItem("userpassword"),
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        uid: "",
        uname: "",
        uremarks: "",
        uage: "",
        usex: "",
        utelephone: "",
        uaddress: "",
      },
    };
  },
  mounted() {
    this.loginusersList(this.userusername, this.userpassword);
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.form = row;
    },
    async loginusersList(userusername, userpassword) {
      const { data } = await axios({
        url: "/users/loginusersList",
        method: "post",
        data: {
          userusername,
          userpassword,
        },
      });
      if (data.status) {
        this.usersData = data.data;
      }
      console.log(data);
    },

    async updateuser(_id) {
      console.log(_id);
      const { data } = await axios({
        url: "/users/updateuser",
        method: "post",
        data: {
          _id,
          users: this.form,
        },
      });
      console.log(data);
      this.loginusersList(this.userusername, this.userpassword);
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
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__container {
  position: relative;
  height: 535px;
}
.el-image__inner,
.el-image__placeholder,
.el-image__error {
  width: 840px;
  height: 535px;
}
.el-calendar__body {
  padding: 12px 20px 119px;
}
.update {
  margin-left: 220px;
}
.el-carousel__indicators--outside {
  display: none;
}
</style>