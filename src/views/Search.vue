<template>
  <div>
    <Header></Header>

    <el-main>
      <div class="block" style="width: 1000px;height:auto;margin: 0 auto">
        <el-card style="height: auto;min-height: 620px">
          <h2>与 “{{ keyword }}” 相关的文章</h2>
          <!-- 列表 -->
          <div v-for="article in articles">
            <el-card style="margin-bottom: 20px">
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
  name: "Search",
  components: {
    Header, Footer
  }, data() {
    return {
      keyword: '',
      articles: '',
      listShow: '',
      emptyShow: ''
    }
  },
  created() {
    this.search()
  },
  methods: {
    async search() {
      this.keyword = this.$route.params.keyword

      const {data: res} = await this.$http.get(`/search/${this.keyword}`)
      this.articles = res.data
      if (res.data.length === 0) {
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
