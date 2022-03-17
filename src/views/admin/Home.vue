<template>
  <div>
    <el-container>
      <el-aside style="width: 200px;">
        <h3 style="color: white">牛油果博客</h3>
        <el-menu
            background-color="#8AC072"
            style="height: auto;min-height: 650px"
            active-text-color="blue"
            text-color="white"
            router
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
          <el-menu-item index="/mg/home">
            <i class="el-icon-notebook-2" style="color: white"></i>
            <span slot="title">文章管理</span>
          </el-menu-item>
          <el-menu-item index="/mg/push">
            <i class="el-icon-edit" style="color: white"></i>
            <span slot="title">创作中心</span>
          </el-menu-item>
          <el-menu-item index="/mg/tag">
            <i class="el-icon-price-tag" style="color: white"></i>
            <span slot="title">标签管理</span>
          </el-menu-item>
          <el-menu-item @click="logout">
            <i class="el-icon-switch-button" style="color: white"></i>
            <span slot="title">退出登录</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main style="height:auto;min-height: 650px">
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
.el-main {
  background-color: #F0F0F0
}

</style>
