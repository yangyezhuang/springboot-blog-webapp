<template>
  <div>
    <!--  文章列表  -->
    <div v-for="article in articles">
      <el-card style="margin-bottom: 20px">
        <!--  title  -->
        <h3 style="text-align: left" @click="$router.push(`/article/${article.id}`)">{{ article.title }}</h3>
        <!--  标签  -->
        <p style="text-align: left;color: gray">
          <i class="el-icon-user" @click="$router.push('/uid/'+article.uid)"></i>:&nbsp;{{ article.author }}&nbsp;&nbsp;&nbsp;
          <i class="el-icon-time"></i>:&nbsp;{{ article.date }}&nbsp;&nbsp;&nbsp;
          <i class="el-icon-paperclip"></i>:&nbsp;
          <el-tag size="mini">{{ article.tag }}</el-tag>
        </p>
        <!--  简介  -->
        <div style="text-align: left;color: gray">
          {{ article.content.replace(/[#]/g, "").slice(0, 60) }}...
        </div>
        <!--  阅读原文  -->
        <span style="color: #3f51b5" @click="$router.push('/article/' + article.id)">阅读原文</span>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  props: ['articles'],
  data() {
    return {
      articles: '',
      emptyShow: ''
    }
  },
  watch: {
    orderData: function (newData, oldData) {
      this.articles = newData;
    }
  }
}
</script>

<style scoped>

</style>
