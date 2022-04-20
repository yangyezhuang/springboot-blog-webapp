<template>
<div>
  <p style="font-size: 40px">生命不息，编码不止</p>
  <p>欢迎来到牛油果博客后台管理系统</p>
  <el-button type="success" @click="$router.push('/mg/articleManager/write')">写文章</el-button>
</div>
</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style scoped>

</style>
