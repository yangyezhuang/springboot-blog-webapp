<template>
  <div>
    <div v-for="article in articles">
      <el-card style="margin-bottom: 20px">
        <h3 style="text-align: left" @click="$router.push('/article/' + article.id)">{{ article.title }}   </h3>
          <span style="float: right">
          <el-button type="danger" icon="el-icon-delete" circle size="small"
                     @click="delArticle(article.id)"></el-button>
        </span>

        <p style="text-align: left;color: gray">
          <i class="el-icon-time"></i>:&nbsp;{{ article.date }}&nbsp;&nbsp;&nbsp;
          <i class="el-icon-paperclip"></i>:&nbsp;
          <el-tag size="mini">{{ article.tag }}</el-tag>
        </p>
        <div style="text-align: left;color: gray">
          {{ article.content.replace(/[#]/g, "").slice(0, 60) }}...
          <span style="color: #3f51b5" @click="$router.push('/article/' + article.id)">阅读原文</span>
        </div>
      </el-card>
    </div>
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
    },

    delArticle(article_id) {
      this.$confirm('是否永久删除该文章?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete(`/articles/${article_id}`).then((res) => {
          // if (res.code === 1)
          //   location.reload()
          this.$message.success("取消收藏")
          location.reload()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style scoped>

</style>
