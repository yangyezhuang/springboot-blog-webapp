<template>
  <div>
    <h1 style="font-size: 100px">404</h1>
    <h2>所访问的页面不存在</h2>
    <el-button @click="$router.push('/')">回到首页</el-button>
  </div>
</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>

</style>
