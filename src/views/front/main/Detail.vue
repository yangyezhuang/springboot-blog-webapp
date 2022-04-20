<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 1000px;margin: 0 auto">
        <!-- 文章详情 -->
        <el-card style="height: auto;min-height: 620px">
          <h1>{{ detail.title }}</h1>
          <div class="article-time">
            <i class="el-icon-user"></i>:&nbsp;{{ detail.author }}&nbsp;&nbsp;&nbsp;
            <i class="el-icon-time"></i>:&nbsp;{{ detail.date }}&nbsp;&nbsp;&nbsp;
            <i class="el-icon-view"></i>:&nbsp;{{ pv }}&nbsp;&nbsp;&nbsp;
            <i class="el-icon-star-off"></i>:&nbsp;{{ star }}&nbsp;&nbsp;&nbsp;
          </div>
          <!-- Markdown 查看器 -->
          <mavon-editor
              class="md"
              :value="detail.content"
              :subfield="false"
              :defaultOpen="'preview'"
              :toolbarsFlag="false"
              :editable="false"
              :scrollStyle="true"
              :ishljs="true"
              :codeStyle="codeStyle"
          ></mavon-editor>
          <br>
          <el-button icon="el-icon-thumb" @click="addStar">点赞</el-button>
          <el-button icon="el-icon-star-off" @click="toCollect()">收藏</el-button>
        </el-card>

        <el-card style="height: 100px;margin-top: 20px">
          <h3>评论</h3>
        </el-card>
      </div>

      <el-backtop :bottom="80">Top</el-backtop>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from '../layout/Footer'
import {Message} from "element-ui";

export default {
  name: "Detail",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      uid: sessionStorage.getItem("uid"),
      article_id: this.$route.params.id,
      codeStyle: "atom-one-dark", //设置主题 ，
      detail: "",
      pv: '',
      star: ''
    };
  },

  created() {
    this.getPv()
    this.getStar()
    this.getDetail()
  },

  methods: {
    // 根据 id 进行查询
    async getDetail() {
      const {data: res} = await this.$http.get(`/articles/article/${this.article_id}`)
      this.detail = res.data;
    },

    // 获取访问量
    async getPv() {
      const {data: res} = await this.$http.get(`/pv/${this.article_id}`)
      this.pv = res.data
    },

    // 获取访问量
    async getStar() {
      const {data: res} = await this.$http.get(`/star/${this.article_id}`)
      this.star = res.data
    },

    // 点赞
    async addStar() {
      const {data: res} = await this.$http.put(`/star/${this.article_id}`)
    },

    // 添加收藏
    async toCollect() {
      const {data: res} = await this.$http.post(`/collect/${this.uid}/article/${this.article_id}`)
      if (res.code === 1)
        Message.success("收藏成功")
    }
  }
}
</script>

<style scoped>

.md {
  box-shadow: none;
}

.v-note-wrapper.shadow {
  box-shadow: none !important;
}

.v-note-wrapper .v-note-panel .v-note-show .v-show-content,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
  background: #fff !important;
}

#editor {
  margin: auto;
  width: 100%;
  height: 580px;
  margin: 15px 0;
}

.details-wrapper {
  max-width: 960px;
  margin: -110px auto 50px;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px;
  padding: 35px;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  box-sizing: border-box;
  min-height: calc(100vh - 120px);
}

/*.article-title {*/
/*  font-size: 30px;*/
/*  line-height: 48px;*/
/*  font-weight: 400;*/
/*  color: rgb(33, 33, 33);*/
/*}*/

.article-time {
  line-height: 14px;
  font-size: 13px;
  font-weight: bold;
  color: rgb(114, 114, 114);
  margin: 8px 0px 10px;
  overflow: hidden;
}
</style>
