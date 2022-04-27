<template>
  <div>
    <el-header>
      <el-menu router mode="horizontal">
        <el-menu-item index="/">
          <img src="../../../assets/img/logo.png" style="height: 80%" alt="logo">
        </el-menu-item>
        <el-menu-item index="/" style="font-size: 18px;">首页</el-menu-item>
        <el-menu-item index="/category" style="font-size: 18px;">分类</el-menu-item>
        <el-menu-item index="/archive" style="font-size: 18px;">历程</el-menu-item>
        <el-menu-item index="/message" style="font-size: 18px;">留言</el-menu-item>
        <el-menu-item index="/about" style="font-size: 18px;">公告</el-menu-item>
        <el-menu-item style="font-size: 18px;">
          <el-input placeholder="请输入相关内容" v-model="keyword">
            <el-button slot="append" icon="el-icon-search" @click="search(keyword)"></el-button>
          </el-input>
        </el-menu-item>
        <el-menu-item style="font-size: 18px;float: right">
          <p v-show="loginShow" style="margin-top: 0" @click="login()">登录</p>
          <!--          <el-avatar v-show="avatarShow"> {{username}}</el-avatar>-->
          <!--  下拉列表  -->
          <el-popover
              v-show="avatarShow"
              placement="bottom"
              width=100
              trigger="hover">
            <el-avatar slot="reference">{{ username }}</el-avatar>
            用户名：{{ username }}
            <br>
            uid：{{ uid }}
            <el-menu-item index="/user/article">
              <i class="el-icon-user"></i>
              个人中心
            </el-menu-item>
            <el-menu-item @click="logout">
              <i class="el-icon-switch-button"></i>
              退出登录
            </el-menu-item>
          </el-popover>
        </el-menu-item>
      </el-menu>
      <login-dialog :visible.sync="visible"></login-dialog>
    </el-header>
  </div>
</template>

<script>
import LoginDialog from "../dialog/LoginDialog";

export default {
  name: "Header",
  components: {
    LoginDialog
  },
  data() {
    return {
      keyword: '',
      visible: false,
      uid: sessionStorage.getItem("uid"),
      username: sessionStorage.getItem("username"),
      loginShow: true,
      avatarShow: false
    }
  },
  created() {
    if (sessionStorage.getItem('uid')) {
      this.avatarShow = true
      this.loginShow = false
    }
  },
  methods: {
    search() {
      this.$router.push(`/search/${this.keyword}`)
    },
    open1() {
      const h = this.$createElement;

      this.$notify({
        title: '标题名称',
        message: h('i', {style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
      });
    },
    login() {
      this.visible = true
    },
    logout() {
      sessionStorage.clear(); // 清除token
      this.loginShow = true
      this.avatarShow = false
      this.$router.push("/")
      location.reload()
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: white;
}

.item {
  /*margin-top: 10px;*/
  margin-right: 40px;
}

</style>
