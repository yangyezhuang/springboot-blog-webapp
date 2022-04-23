<template>
  <el-dialog title="注 册" :visible.sync="openCardDialog" width="400px" center>
    <el-form :model="form" label-width="40px">
      <el-form-item label="账号">
        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <!--      <el-button @click="dialogFormVisible = false">注 册</el-button>-->
      <el-button @click="register()">注 册</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {Message} from "element-ui";

export default {
  name: "RegisterDialog",
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
      form: {
        username: '',
        password: ''
      },
    }
  },
  methods: {
    async register() {
      const {data: res} = await this.$http.post(`/user/add`, this.form)
      if (res.code === 1) {
        Message.success('注册成功')
        // location.reload()
        this.visible = false
      }
      // Message.info('请重试')

      // this.visible = false
    }
  }
}
</script>

<style scoped>

</style>
