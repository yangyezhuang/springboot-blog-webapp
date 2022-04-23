<template>
  <div>
    <Header></Header>

    <el-main>
      <div class="block" style="width: 1000px;height:auto;margin: 0 auto">
        <el-card style="height: auto;min-height: 560px">
          <h2 style="color:#F9C626;">归档：124篇</h2>
          <el-timeline :reverse="reverse">
            <el-timeline-item
                style="text-align: left"
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp">
              {{ activity.content }}
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
  name: "Archive",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      reverse: true,
      activities: [{
        content: '活动按期开始',
        timestamp: '2018-04-15'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }]
    };
  }
}
</script>

<style scoped>

</style>
