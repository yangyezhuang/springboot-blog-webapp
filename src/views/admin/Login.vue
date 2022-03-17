<template>
  <div class="login_container">
    <div class="login_box">
      <h1 style="margin-top: 50px">牛油果博客后台</h1>

      <!--  登录表单 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_info">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="success" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      // 登录表单的数据
      loginForm: {
        username: 'admin',
        password: ''
      },
      // 表单验证规则
      loginFormRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur'}
        ]
      }
    }
  },

  methods: {
    // 登录
    async login() {
      // this.$router.push('/mg/home')

      const {data: res} = await this.$http.post('/login', this.loginForm);
      if (res.code !== 1) {
        this.$message.error(res.data)
      } else {
        this.$message.success('登陆成功')
        window.sessionStorage.setItem('username', res.data.username)
        this.$router.push('/mg/home')
      }
    }
  }
}
</script>

<style scoped>
.login_container {
  background-color: #c5cae9;
  background-size: cover;
  height: 100%;
}

.login_box {
  width: 300px;
  height: 350px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login_info {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

</style>

