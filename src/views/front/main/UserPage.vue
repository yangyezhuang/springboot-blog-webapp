<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 1000px;margin: 0 auto">
        <el-card style="height: auto;min-height: 650px">
          <!--          <img src="../../../assets/img/logo.png" alt="" style="width: 100px">-->
          <el-avatar> {{ uid }}</el-avatar>
          <h3>{{ uid }}</h3>
          <p>简介：一名小码农</p>
          <el-button icon="el-icon-plus" @click="follow">关注</el-button>
          <el-button icon="el-icon-close" @click="nofollow">取关</el-button>
          <el-divider></el-divider>

          <!--     文章列表     -->
          <article-list :articles="articles"></article-list>

          <!--   空状态   -->
          <el-empty v-show="emptyShow" description="暂无与相关文章"></el-empty>
        </el-card>
      </div>

      <!--  回到顶部   -->
      <el-backtop :bottom="80">Top</el-backtop>
    </el-main>

  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ArticleList from "../layout/ArticleList";

export default {
  name: "UserPage",
  components: {
    Header,
    Footer,
    ArticleList
  },
  data() {
    return {
      uid: this.$route.params.uid,
      articles: '',
      emptyShow: ''
    }
  },
  created() {
    // this.getUserInfo()
    this.getUserArticles(this.uid)
  },
  methods: {
    async getUserInfo() {

    },

    async getUserArticles(uid) {
      const {data: res} = await this.$http.get(`/articles/user/${uid}`)
      this.articles = res.data;
      if (this.articles.length === 0) {
        this.emptyShow = true
      } else {
        this.emptyShow = false
      }
    },

    toDetail(id) {
      this.$router.push(`/article/${id}`)
    },

    // 关注
    follow() {
      this.$message.info('该功能暂未开放')
    },
    //
    nofollow() {
      this.$message.info('该功能暂未开放')
    }
  }
}
</script>

<style scoped>

</style>
