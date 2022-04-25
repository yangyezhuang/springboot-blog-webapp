<template>
  <div>
    <!--  用户主页标签模块  -->
    <el-card style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <i class="el-icon-collection-tag"></i>
        <span>标签</span>
      </div>
      <div style="float: left">
        <el-tag style="margin-right: 10px;margin-bottom: 5px" size="medium" v-for="tag in tags" :type="tag.type"
                @click="$router.push(`/tags/${tag.label}`)">
          {{ tag.label }} [{{ tag.value }}]
        </el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "TagInfo",
  data() {
    return {
      tags: [
        {label: 'java', value: 12, type: 'primary'},
        {label: 'spring', value: 15, type: 'warning'},
        {label: 'vue', value: 7, type: 'success'},
        {label: 'mysql', value: 9, type: 'info'},
        {label: 'python', value: 21, type: 'danger'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
