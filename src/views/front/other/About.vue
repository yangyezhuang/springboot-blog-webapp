<template>
  <div>
    <Header></Header>

    <el-main>
      <div class="block" style="width: 1000px;height:auto;margin: 0 auto">
        <el-card style="height: auto;min-height: 560px">
          <h3>网站公告</h3>
          <el-timeline v-for="item in notices.reverse()">
            <el-timeline-item :timestamp="item.date" placement="top">
              <el-card>
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
                <p style="text-align: right;color: deepskyblue">{{ item.author }}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </div>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default {
  name: "About",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      notices: ''
    }
  },

  created() {
    this.getNotices()
  },

  methods: {
    async getNotices() {
      const {data: res} = await this.$http.get('/notices')
      this.notices = res.data
    }
  }
}
</script>

<style scoped>

</style>
