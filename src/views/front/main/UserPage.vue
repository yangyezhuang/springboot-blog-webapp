<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 1100px;margin: 0 auto">
        <!--   左边主体    -->
        <div style="width: 780px;float: right;">
          <!-- 列表 -->
          <article-list :articles="articles"></article-list>

          <!--  分页 -->
          <el-pagination
              background
              layout="prev, pager, next"
              :total="25">
          </el-pagination>
        </div>

        <!--   右边主体    -->
        <div style="width: 290px;float: left">
          <!--  介绍卡片   -->
          <el-card>
            <div v-show="userInfoShow">
              <el-avatar style="background-color: gold" :size="55">{{ uid }}</el-avatar>
              <h3>{{ uid }}</h3>
            </div>
            <i class="el-icon-edit-outline"> 还没有介绍哦...</i>
            <p>
              <span style="margin-right: 20px">关注：12 </span>
              <span>粉丝：9999+</span>
            </p>
            <el-button plain @click="follow" size="small">关注</el-button>
          </el-card>

          <!-- 标签  -->
          <tag-info></tag-info>

          <!-- 最近文章  -->
          <el-card style="margin-top: 20px" v-show="lateArticleShow">
            <div slot="header" class="clearfix">
              <i class="el-icon-document"></i>
              <span>最近发布</span>
            </div>
            <div>
              <p style="text-align: left;margin-bottom: 5px" v-for="article in lateArticles"
                 @click="$router.push('/article/'+article.id)">{{ article.title }}</p>
            </div>
          </el-card>

          <!--  归档  -->
          <el-card style="margin-top: 20px" v-show="archiveShow">
            <div slot="header" class="clearfix">
              <i class="el-icon-receiving"></i>
              <span>归档</span>
            </div>

          </el-card>
        </div>
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
import TagInfo from "../layout/TagInfo";

export default {
  name: "UserPage",
  components: {
    Header,
    Footer,
    ArticleList, TagInfo
  },
  data() {
    return {
      uid: this.$route.params.uid,
      articles: '',
      emptyShow: '',
      userInfoShow: true,
      archiveShow: true,
      lateArticleShow: true
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
    }
  }
}
</script>

<style scoped>

</style>
