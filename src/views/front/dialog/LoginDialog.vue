<template>
  <div>
    <el-dialog title="登录" :visible.sync="openCardDialog">
      <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="login">登 录</el-button>
        <el-button @click="dialogFormVisible = false">注 册</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {Message} from "element-ui";

export default {
  name: "LoginDialog",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    openCardDialog: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val) // openCardDialog改变的时候通知父组件
      }
    }
  },
  data() {
    return {
      form: '',
      formLabelWidth: 120,
    }
  },
  methods: {
    login() {
      sessionStorage.setItem("uid", 10001)
      sessionStorage.setItem("username", 'admin')
      Message.success('登陆成功')
      location.reload()
      // this.visible = false
    }
  }

}
</script>

<style scoped>

</style>
