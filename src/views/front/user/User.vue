<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 1200px;min-height: 650px;margin: 0 auto">
        <el-card>
          <img src="../../../assets/img/logo.png" alt="" style="width: 100px">
          <h3>{{ username }}</h3>
          <p>{{ uid }}</p>

          <el-divider></el-divider>

          <el-menu router mode="horizontal">
            <el-menu-item index="/user/info" style="font-size: 18px;">个人信息</el-menu-item>
            <el-menu-item index="/user/article" style="font-size: 18px;">我的文章</el-menu-item>
            <el-menu-item index="/user/collect" style="font-size: 18px;">我的收藏</el-menu-item>
            <el-menu-item index="/user/write" style="font-size: 18px;">创作中心</el-menu-item>
            <el-menu-item style="font-size: 18px;float: right">
              <el-input placeholder="请输入相关内容" v-model="keyword">
                <el-button slot="append" icon="el-icon-search" @click="search(keyword)"></el-button>
              </el-input>
            </el-menu-item>
          </el-menu>

          <br>

          <router-view></router-view>
        </el-card>
      </div>
    </el-main>

    <Footer></Footer>

  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default {
  name: "User",
  components: {Header, Footer},
  data() {
    return {
      username: sessionStorage.getItem('username'),
      uid: sessionStorage.getItem("uid"),
      keyword: ''
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      this.uid = this.$route.params.uid
    },

    search() {

    }
  }
}
</script>

<style scoped>

</style>
