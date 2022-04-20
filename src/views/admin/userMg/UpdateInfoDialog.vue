<template>
  <div>
    <el-dialog title="创建用户" :visible.sync="openCardDialog">
      <el-form :model="form">
        <el-form-item label="uid" :label-width="formLabelWidth">
          <el-input v-model="form.uid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addUser()">确 定</el-button>
        <el-button @click="updateVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {Message} from "element-ui";

export default {
  name: "UpdateInfoDialog",
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
      formLabelWidth: '120px',
      form: {
        uid:'',
        username: '',
        password: ''
      },
    }
  },
  methods: {
    async addUser() {
      const {data: res} = await this.$http.post("/user/add", this.form)
      if (res.data === 1) {
        Message.success('发布成功')
        location.reload()
      } else {
        Message.success(res.data)
      }
    }
  }
}
</script>

<style scoped>

</style>
