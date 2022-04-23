<template>
  <div>
    <el-card>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="uid">
          <el-input v-model="form.uid" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="性别">
      <span style="float: left">
        <el-radio v-model="form.sex" label="男"></el-radio>
        <el-radio v-model="form.sex" label="女"></el-radio>
      </span>
        </el-form-item>
        <el-form-item label="个人介绍">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "InfoCenter",
  data() {
    return {
      form: {
        uid: 10001,
        username: 'admin',
        password: '******',
        sex: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message.success("修改成功")
    }
  }
}
</script>

<style scoped>

</style>
