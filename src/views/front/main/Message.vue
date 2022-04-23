<template>
  <div>
    <Header></Header>

    <el-main>
      <div class="block" style="width: 1000px;height:auto;margin: 0 auto">
        <el-card style="height: auto;min-height: 560px">
          <h3 style="text-align: left">给我留言</h3>
          <el-form :label-position="left" label-width="80px" :model="MsgForm">
            <el-form-item label="姓名">
              <el-input v-model="MsgForm.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="MsgForm.email"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="MsgForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="留言">
              <el-input v-model="MsgForm.content"></el-input>
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
  name: "Message",
  components: {
    Header, Footer
  },
  data() {
    return {
      MsgForm: {
        name: '',
        email: '',
        phone: '',
        content: ''
      }
    }
  },
  methods: {
    async submit() {
      const {data: res} = await this.$http.post('/messages', this.MsgForm)
      if (res.code === 1) {
        this.$message.success('留言成功')
      }
    }
  }
}
</script>

<style scoped>

</style>
