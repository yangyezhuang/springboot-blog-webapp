<template>
  <div>
    <el-header>
      <el-menu router mode="horizontal">
        <el-menu-item index="/">
          <img src="../assets/img/logo.png" style="height: 80%" alt="logo">
        </el-menu-item>

        <el-menu-item index="/" style="font-size: 18px;">首页</el-menu-item>
        <el-menu-item index="/category" style="font-size: 18px;">分类</el-menu-item>
        <el-menu-item index="/archive" style="font-size: 18px;">归档</el-menu-item>
        <el-menu-item index="/about" style="font-size: 18px;">关于</el-menu-item>
        <el-menu-item  style="font-size: 18px;float: right">
            <el-input placeholder="请输入相关内容" v-model="keyword">
              <el-button slot="append" icon="el-icon-search" @click="search(keyword)"></el-button>
            </el-input>
        </el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search() {
      this.$router.push(`/search/${this.keyword}`)
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: white;
}

</style>
