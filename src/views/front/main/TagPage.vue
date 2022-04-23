<template>
  <div>
    <Header></Header>

    <el-main>
      <div class="block" style="width: 1000px;height:auto;margin: 0 auto">
        <el-card style="height: auto;min-height: 620px">
          <h2>Tag：
            <el-tag style="margin-right: 10px;margin-bottom: 5px" type="warning">
              {{ tag }}
            </el-tag>
          </h2>
          <!--     列表 -->
          <article-list :articles="articles"></article-list>

          <!--   空状态   -->
          <div v-show="emptyShow">
            <el-empty description="暂无相关文章"></el-empty>
          </div>
        </el-card>
      </div>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ArticleList from "../layout/ArticleList";

export default {
  name: "TagPage",
  components: {
    Header, Footer, ArticleList
  },
  data() {
    return {
      tag: '',
      articles: ''
    }
  },

  created() {
    this.getArticleByTag()
  },

  methods: {
    // 获取对应分类的文章
    async getArticleByTag() {
      let tag = this.$route.params.tag
      this.tag = tag

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
