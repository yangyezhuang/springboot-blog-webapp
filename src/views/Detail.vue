<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 1000px;margin: 0 auto">
        <!-- 文章详情 -->
        <el-card style="height: auto;min-height: 620px">
          <h1>{{ detail.title }}</h1>

          <div class="article-time">{{ detail.date }}</div>
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
        </el-card>
      </div>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from './Footer'

export default {
  name: "Detail",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      codeStyle: "atom-one-dark", //设置主题 ，
      detail: "",
    };
  },

  created() {
    this.getDetail()
  },

  methods: {
    // 根据 id 进行查询
    async getDetail() {
      let id = this.$route.params.id;
      const {data: res} = await this.$http.get(`/article/${id}`)
      this.detail = res.data;
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
