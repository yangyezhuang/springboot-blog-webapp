<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 800px;min-height: 650px;margin: 0 auto">
        <!--    关于作者    -->

        <el-card> <h3 style="text-align: left">关于作者</h3>
          <el-timeline :reverse="reverse">
            <el-timeline-item
                style="text-align: left"
                v-for="(activity, index) in activities"
                :key="index">
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
          <!--          <p style="text-align: left">-->
          <!--            CSDN：<a href="https://blog.csdn.net/qq_47183158" style="text-decoration: none">https://blog.csdn.net/qq_47183158</a><br>-->
          <!--          </p> <br>-->
          <p style="color: red;text-align: left">著作权归作者所有。<br>
            商业转载请联系作者获得授权，非商业转载请注明出处。</p>

          <hr>
        <!--   给我留言     -->
        <h3 style="text-align: left">给我留言</h3>
          <el-form :label-position="left" label-width="80px" :model="formLabelAlign">
            <el-form-item label="邮箱">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="留言">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" plain @click="submit">提交</el-button>
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
      reverse: false,
      activities: [{
        content: '作者：Java加糖',
        timestamp: '2018-04-15'
      }, {
        content: '座右铭：奋斗不息，编码不止',
        timestamp: '2018-04-13'
      }, {
        content: 'QQ：365939114',
        timestamp: '2018-04-11'
      }, {
        content: 'CSDN：https://blog.csdn.net/qq_47183158',
        timestamp: '2018-04-11'
      }
      ],
      formLabelAlign: ''
    }
  },

  methods: {
    async submit() {
      const {data: res} = await this.$http.post('/submit')
      console.log(res.data)
    }
  }
}
</script>

<style scoped>

</style>
