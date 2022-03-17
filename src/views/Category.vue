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
          <div v-for="article in articles">
            <el-card style="margin-top: 20px">
              <h3 style="text-align: left" @click="$router.push('/article/' + article.id)">{{ article.title }}</h3>
              <p style="text-align: left;color: gray">
                <i class="el-icon-time"></i>:&nbsp;{{ article.date }}&nbsp;&nbsp;&nbsp;
                <i class="el-icon-paperclip"></i>:&nbsp;
                <el-tag size="mini">{{ article.tag }}</el-tag>
              </p>
              <div style="text-align: left;color: gray">
                {{ article.content.replace(/[#]/g, "").slice(0, 60) }}...
              </div>
              <span style="color: #3f51b5" @click="$router.push('/article/' + article.id)">阅读原文</span>
            </el-card>
          </div>

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
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Category",
  components: {
    Header,
    Footer
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
      const {data: res} = await this.$http.get('/getTag')
      this.tags = res.data
    },

    // 获取默认分类
    async getDefaultTag(){
      const {data: res} = await this.$http.get(`/category/java`)
      this.articles = res.data
    },

    // 获取对应分类的文章
    async getArticleByTag(tag) {
      const {data: res} = await this.$http.get(`/category/${tag}`)
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
