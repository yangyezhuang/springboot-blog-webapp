<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 1100px;margin: 0 auto">
        <!--   左边主体    -->
        <div style="width: 750px;float: left;">
          <!-- 列表 -->
          <article-list :articles="articles"></article-list>

          <!--  分页 -->
          <el-pagination
              background
              layout="prev, pager, next"
              :total="100">
          </el-pagination>
        </div>

        <!--   右边主体    -->
        <div style="width: 300px;float: right">
          <!--  介绍卡片   -->
          <el-card>
            <div v-show="sysInfoShow">
              <img src="../../assets/img/logo.png" style="height: 60px;border-radius: 50%"
                   @click="$router.push(`/user/article`)">
              <h3>Sun's Blog</h3>
            </div>

            <div v-show="userInfoShow" @click="$router.push(`/user/article`)">
              <el-avatar style="background-color: gold" :size="55">{{ username }}</el-avatar>
              <h3>{{ username }}</h3>
            </div>
            <i class="el-icon-edit-outline"> 还没有介绍哦...</i>
            <p>
              <span style="margin-right: 20px">关注：12 </span>
              <span>粉丝：9999+</span>
            </p>
          </el-card>

          <!-- 标签  -->
          <tag-info></tag-info>

          <!-- csdn二维码  -->
          <el-card style="margin-top: 20px" v-show="QrCodeShow">
            <div slot="header" class="clearfix">
              <i class="el-icon-magic-stick"></i>
              <span>关注我</span>
            </div>
            <div>
              <img src="../../assets/img/csdn2.jpg" alt="" style="width: 150px">
            </div>
          </el-card>

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

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ArticleList from "./layout/ArticleList";
import TagInfo from "./layout/TagInfo";

export default {
  name: "Index",
  components: {
    Header, Footer, ArticleList,TagInfo
  },
  data() {
    return {
      uid: '',
      username: sessionStorage.getItem('username'),
      articles: [],
      lateArticles: [],
      sysInfoShow: true,
      userInfoShow: false,
      QrCodeShow: true,
      archiveShow: false,
      lateArticleShow: false,
      queryInfo: {
        query: '',
        pagenum: 1, // 当前页数
        pagesize: 5 // 当前每页显示的条数
      },
      total: 0,
      infoTag: [
        {icon: '#icon-github', url: 'https://github.com/yangyezhuang'},
        {icon: '#icon-csdn', url: 'https://blog.csdn.net/qq_47183158'},
        {icon: '#icon-youxiang', url: ''},
        {icon: '#icon-twitter', url: ''}
      ]
    };
  },

  created() {
    this.isLogin()
    this.getAllArticles()
    this.getLateArticles()
  },

  methods: {
    isLogin() {
      this.uid = sessionStorage.getItem('uid')
      if (this.uid) {
        this.sysInfoShow = false
        this.userInfoShow = true
        this.QrCodeShow = false
        this.archiveShow = true
        this.lateArticleShow = true

        this.getLateArticles()
      }
    },

    // 获取全部文章
    async getAllArticles() {
      const {data: res} = await this.$http.get("/articles")
      this.articles = res.data;
    },

    // 获取用户最近文章
    async getLateArticles() {
      const {data: res} = await this.$http.get(`/articles/user/${this.uid}`)
      this.lateArticles = res.data;
    },

    // 监听pagesize改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
    },

    // 监听页码值改变的事件
    handleCurrentChange(pageNum) {
      this.queryInfo.pagenum = pageNum
    }

  }
}
</script>

<style scoped>

</style>
