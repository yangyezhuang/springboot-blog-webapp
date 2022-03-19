<template>
  <div>
    <el-container>
      <!--   侧边栏菜单   -->
      <el-aside style="width: 200px;">
        <el-menu
            background-color="#8AC072"
            style="height: auto;min-height: 650px;"
            active-text-color="blue"
            text-color="white"
            router
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
          <div style="margin-top: 25px">
            <div style="width: 55px;background-color: white;border-radius: 50%;margin: 0 auto">
              <img src="../../assets/img/logo.png" alt="" style="width: 50px"></div>
            <br>
            <strong style="color: white">admin</strong>
          </div>
          <el-divider></el-divider>

          <el-menu-item index="/mg/welcome">
            <i class="el-icon-house" style="color: white"></i>
            <span slot="title">主&nbsp;页</span>
          </el-menu-item>
          <el-menu-item index="/mg/article">
            <i class="el-icon-notebook-2" style="color: white"></i>
            <span slot="title">文章管理</span>
          </el-menu-item>
          <el-menu-item index="/mg/write">
            <i class="el-icon-edit" style="color: white"></i>
            <span slot="title">创作中心</span>
          </el-menu-item>
          <el-menu-item index="/mg/tag">
            <i class="el-icon-price-tag" style="color: white"></i>
            <span slot="title">标签管理</span>
          </el-menu-item>
          <el-menu-item index="/mg/setting">
            <i class="el-icon-setting" style="color: white"></i>
            <span slot="title">网站设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!--   中间主体区域   -->
      <el-container>
        <el-header>
          <el-menu router mode="horizontal">
            <el-menu-item style="font-size: 18px;">牛油果博客</el-menu-item>
            <el-menu-item style="float: right">
              <el-button size="mini" type="text" icon="el-icon-user-solid" @click="user">个人中心</el-button>
              <el-button size="mini" type="text" icon="el-icon-switch-button" @click="logout">退出</el-button>
            </el-menu-item>
          </el-menu>
        </el-header>

        <el-main style="height:auto;min-height: 700px">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {}
  },
  methods: {
    user(){
      this.$message.info("暂未开放")
    },
    logout() {
      sessionStorage.clear()
      this.$router.push('/')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: white;
  padding: 0;
}

.el-main {
  background-color: #F0F0F0
}

</style>
