<template>
  <div>
    <el-card style="height: auto;margin-top: 20px">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <el-input type="text" style="float: right;" v-model="commentForm.comment"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button @click="addComment">发表评论</el-button>
          </div>
        </el-col>
      </el-row>

      <el-divider><h3>评论列表</h3></el-divider>

      <div v-for="comment in commentList">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-avatar slot="reference">{{ comment.uid }}</el-avatar>
              <!--  <p>{{ comment.uid }}</p>-->
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <el-input type="text" :disabled="true" v-model="comment.comment"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <p style="color: grey">{{ comment.date }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ['article_id'],
  data() {
    return {
      uid: sessionStorage.getItem("uid"),
      username: sessionStorage.getItem('username'),
      article_id: '',
      commentList: '',
      commentForm: {
        id: '',
        uid: sessionStorage.getItem("uid"),
        article_id: this.$route.params.id,
        comment: ''
      }
    }
  },
  watch: {
    orderData: function (newData, oldData) {
      //newData就是article_id
      this.article_id = newData;
      //	methods的函数在这里调用可以获取到newOrderData的值
      this.getComments(this.article_id)
    }
  },

  created() {
    this.getComments()
  },

  methods: {
    // 获取评论
    async getComments() {
      const {data: res} = await this.$http.get(`/comments/article/${this.article_id}`)
      this.commentList = res.data.reverse()
    },

    // 添加评论
    async addComment() {
      // 判断是否登录
      if (this.username) {
        const {data: res} = await this.$http.post(`/comments`, this.commentForm)
        if (res.code === 1) {
          this.$message.success('发表成功')
          this.getComments()
        }
      } else {
        this.$message.info('请先登录')
      }
    }
  }
}
</script>

<style scoped>

</style>
