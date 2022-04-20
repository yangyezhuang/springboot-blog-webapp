<template>
  <div>
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
        <span>
          <el-button icon="el-icon-delete" size="small" @click="delCollect(article.id)"></el-button>
        </span>
      </el-card>
    </div>
  </div>
</template>

<script>
import {Message} from "element-ui";

export default {
  name: "UserCollect",
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
    },

    toUserPage() {
      let uid = 10001
      this.$router.push(`/user`)
    },

    delCollect(article_id) {
      this.$confirm('是否取消收藏该文章?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete(`/collect/${this.uid}/article/${article_id}`).then((res) => {
          // if (res.code === 1)
          //   location.reload()
          Message.success("取消收藏")
          location.reload()
        })
      }).catch(() => {
        this.$message.info('已取消删除');
      });
    }
  }
}
</script>

<style scoped>

</style>
