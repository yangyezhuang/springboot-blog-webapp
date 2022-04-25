<template>
  <div>
    <h3>我的收藏</h3>

    <!--  文章列表组件  -->
    <article-list :articles="articles"></article-list>
  </div>
</template>

<script>
import ArticleList from "../layout/ArticleList";

export default {
  name: "UserCollect",
  components: {
    ArticleList
  },
  data() {
    return {
      uid: sessionStorage.getItem('uid'),
      articles: ''
    }
  },
  created() {
    this.getAllCollect()
  },
  methods: {
    // 获取全部收藏文章
    async getAllCollect() {
      const {data: res} = await this.$http.get(`/collect/${this.uid}`)
      this.articles = res.data;
    }
  }
}
</script>

<style scoped>

</style>
