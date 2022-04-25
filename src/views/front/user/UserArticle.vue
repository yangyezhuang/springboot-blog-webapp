<template>
  <div>
    <h3>我的文章</h3>

    <!--  文章列表组件  -->
    <article-list :articles="articles"></article-list>
  </div>
</template>

<script>
import ArticleList from "../layout/ArticleList";

export default {
  name: "UserArticle",
  components: {
    ArticleList
  },
  data() {
    return {
      uid: sessionStorage.getItem("uid"),
      articles: ''
    }
  },
  created() {
    this.getAllArticles()
  },
  methods: {
    // 获取全部文章
    async getAllArticles() {
      const {data: res} = await this.$http.get(`/articles/user/${this.uid}`)
      this.articles = res.data;
    }
  }
}
</script>

<style scoped>

</style>
