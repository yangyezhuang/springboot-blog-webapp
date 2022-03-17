<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 1100px;margin: 0 auto">
        <!--   左边主体    -->
        <div style="width: 750px;float: left;">
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
            <img src="../assets/img/logo.png" style="height: 60px;border-radius: 50%">
            <h3>Java加糖</h3>
            <el-divider></el-divider>
            <div style="margin-right: 10px">
              <a :href="tag.url" v-for="tag in infoTag" style="text-decoration: none">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="tag.icon"></use>
                </svg> &nbsp;
              </a>
            </div>
          </el-card>

          <!--  技能  -->
          <el-card style="margin-top: 20px">
            <div slot="header" class="clearfix">
              <i class="el-icon-magic-stick"></i>
              <span>技能</span>
            </div>

            <!--  进度条    -->
            <div style="height: auto" v-for="skill in skills">
              <div style="height: 30px;">
                <div style="float: left;margin-top: 5px">{{ skill.name }}</div>
                <div style="float: right;width: 200px">
                  <el-progress :text-inside="true" :stroke-width="22" :percentage="skill.score"
                               :status="skill.type"></el-progress>
                </div>
              </div>
            </div>
          </el-card>

          <!-- 标签  -->
          <el-card style="margin-top: 20px">
            <div slot="header" class="clearfix">
              <i class="el-icon-discount"></i>
              <span>标签</span>
            </div>
            <div style="float: left">
              <el-tag style="margin-right: 10px;margin-bottom: 5px" size="medium" v-for="tag in tags" :type="tag.type">
                {{ tag.label }} [{{ tag.value }}]
              </el-tag>
            </div>
            <br>
          </el-card>
        </div>
      </div>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Index",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      articles: [],

      classItems: '',
      queryInfo: {
        query: '',
        pagenum: 1, // 当前页数
        pagesize: 5 // 当前每页显示的条数
      },
      totalSize: '',
      total: 0,

      infoTag: [
        {icon: '#icon-github', url: 'https://github.com/yangyezhuang'},
        {icon: '#icon-csdn', url: 'https://blog.csdn.net/qq_47183158'},
        {icon: '#icon-youxiang', url: ''},
        {icon: '#icon-twitter', url: ''}
      ],

      skills: [
        {name: 'Python', score: 90, type: 'primary'},
        {name: 'Web', score: 80, type: 'success'},
        {name: 'Java', score: 70, type: 'warning'},
        {name: 'Linux', score: 60, type: 'exception'}
      ],

      tags: [
        {label: 'java', value: 12, type: 'primary'},
        {label: 'spring', value: 15, type: 'warning'},
        {label: 'vue', value: 7, type: 'success'},
        {label: 'mysql', value: 9, type: 'info'},
        {label: 'python', value: 21, type: 'danger'}
      ]
    };
  },

  created() {
    this.getAllArticles()
  },

  methods: {
    // 获取全部文章
    async getAllArticles() {
      const {data: res} = await this.$http.get("/articles")
      this.articles = res.data;
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
