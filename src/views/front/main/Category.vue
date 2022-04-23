<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 1000px;margin: 0 auto">
        <el-card style="height: auto;min-height: 650px">
          <!--   标签页头   -->
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item v-for="i in tags" @click="getArticleByTag(i.tag)">{{ i.tag }}</el-menu-item>
          </el-menu>

          <!-- 列表 -->
          <article-list :articles="articles"></article-list>

          <!--  空状态  -->
          <el-empty v-show="emptyShow" description="暂无相关文章"></el-empty>
        </el-card>
      </div>

      <!--  回到顶部   -->
      <el-backtop :bottom="80">Top</el-backtop>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ArticleList from "../layout/ArticleList";

export default {
  name: "Category",
  components: {
    Header,
    Footer,
    ArticleList
  },

  data() {
    return {
      activeName: 'second',
      emptyShow: '',
      tags: '',
      articles: ''
    }
  },

  created() {
    this.getTag()
    this.getDefaultTag()
  },

  methods: {
    // 获取tags
    async getTag() {
      const {data: res} = await this.$http.get('/tags')
      this.tags = res.data
    },

    // 获取默认分类
    async getDefaultTag() {
      const {data: res} = await this.$http.get(`/articles/category/java`)
      this.articles = res.data
    },

    // 获取对应分类的文章
    async getArticleByTag(tag) {
      const {data: res} = await this.$http.get(`/articles/category/${tag}`)
      this.articles = res.data
      if (this.articles.length === 0) {
        this.emptyShow = true
      } else {
        this.emptyShow = false
      }
    }
  }
}
</script>

<style scoped>

</style>
