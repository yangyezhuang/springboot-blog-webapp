<template>
  <div>
    <el-card>
      <el-form :model="form">
        <el-form-item label="uid" :label-width="formLabelWidth">
          <el-input disabled v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input disabled v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="update()">修改</el-button>
    </el-card>
  </div>
</template>

<script>
import {Message} from "element-ui";

export default {
  name: "UpdateInfoDialog",
  data() {
    return {
      formLabelWidth: '120px',
      form: {
        id: '',
        username: '',
        password: ''
      },
    }
  },
  created() {
    this.getInfo()
  },

  methods: {
    async getInfo() {
      let uid = this.$route.params.uid
      const {data: res} = await this.$http.get(`/user/info/${uid}`)
      this.form = res.data
    }
    ,
    async update() {
      const {data: res} = await this.$http.put("/user/update", this.form)
      if (res.data === 1) {
        Message.success('修改成功')
        this.$router.push('/mg/userManager/users')
      } else {
        Message.success(res.data)
      }
    }
  }
}
</script>

<style scoped>

</style>
