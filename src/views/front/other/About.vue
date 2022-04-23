<template>
  <div>
    <Header></Header>

    <el-main>
      <div class="block" style="width: 1000px;height:auto;margin: 0 auto">
        <el-card style="height: auto;min-height: 560px">
          <h3 style="text-align: left">关于作者</h3>
          <el-timeline :reverse="reverse">
            <el-timeline-item
                style="text-align: left"
                v-for="(activity, index) in activities"
                :key="index">
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>

          <p style="color: red;text-align: left">著作权归作者所有。<br>
            商业转载请联系作者获得授权，非商业转载请注明出处。</p>
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
        content: '作者：杨业壮',
        timestamp: '2018-04-15'
      }, {
        content: 'QQ：365939114',
        timestamp: '2018-04-11'
      }, {
        content: 'CSDN：https://blog.csdn.net/qq_47183158',
        timestamp: '2018-04-11'
      }
      ],

    }
  }
}
</script>

<style scoped>

</style>
