<template>
  <div class="main" style="height: auto;min-height: 700px">
    <el-header style="height: 25px;">
      <!--   面包屑导航   -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/mg/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/mg/home">博文管理</a></el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>

    <!--  卡片区域  -->
    <el-card>
      <!-- 搜索 -->
      <el-row>
        <el-col :span="6">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>

      <!-- 列表 -->
      <el-table :data="articles.slice((queryInfo.pagenum-1)*queryInfo.pagesize,queryInfo.pagenum*queryInfo.pagesize)"
                border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="id" prop="id" width="100px"></el-table-column>
        <el-table-column label="文章标题" prop="title" width="150px"></el-table-column>
        <el-table-column label="内容" prop="content" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="150px">
          <template v-slot="scope">
            <el-button type="primary" icon="el-icon-edit" @click="editCourse(scope.row.id)"></el-button>
            <el-button type="danger" icon="el-icon-delete" @click="delBlog(scope.row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          :page-sizes="[3, 5, 7, 9]"
          :page-size="queryInfo.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalSize">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "BlogList",
  data() {
    return {
      classItems: '',
      queryInfo: {
        query: '',
        pagenum: 1, // 当前页数
        pagesize: 8 // 当前每页显示的条数
      },
      totalSize: '',
      articles: [],
      total: 0
    };
  },


  created() {
    this.getAll()
  },

  methods: {
    // 获取全部文章
    async getAll() {
      const {data: res} = await this.$http.get("/articles")
      this.articles = res.data;
      this.total = res.data.length
    },

    // 根据 id 删除文章
    async delBlog(id) {
      const {data: res} = await this.$http.post(`/del/${id}`)
      if (res.code === 1) {
        this.$message.success('删除成功')
        location.reload()
      }
    },

    // 监听pagesize改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
    },

    // 监听页码值改变的事件
    handleCurrentChange(pageNum) {
      this.queryInfo.pagenum = pageNum
    },

    //  编辑课程信息
    editCourse(id) {
      this.$router.push(`/mg/edit/${id}`)
    }
  }
};
</script>

<style scoped>
.el-header {

}
</style>

