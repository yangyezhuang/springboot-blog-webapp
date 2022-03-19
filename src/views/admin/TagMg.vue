<template>
  <div class="main" style="height: auto;">
    <!--   面包屑导航   -->
    <el-header style="height: 25px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/mg/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/mg/tag">标签管理</a></el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>


    <!--  卡片区域  -->
    <el-card style="height: auto">
      <el-row :gutter="10">
        <!--  添加标签  -->
        <el-col :span="4">
          <el-button @click="dialogFormVisible = true">添加标签</el-button>
        </el-col>
        <!--  添加标签弹窗  -->
        <el-dialog title="添加标签" :visible.sync="dialogFormVisible" center width="500px">
          <el-form :model="form">
            <el-form-item label="标签" label-width="120px">
              <el-input v-model="form.name" autocomplete="off" style="width: 200px"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="addTag(form.name);dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-row>

      <!-- 标签列表 -->
      <el-table :data="tag.slice((queryInfo.pagenum-1)*queryInfo.pagesize,queryInfo.pagenum*queryInfo.pagesize)"
                border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="标签" prop="tag" width="150px"></el-table-column>
        <el-table-column label="操作" width="80px">
          <template v-slot="scope">
            <el-button type="danger" icon="el-icon-delete" @click="delTag(scope.row.tag)"></el-button>
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
  name: "TagManage",
  data() {
    return {
      classItems: '',
      queryInfo: {
        query: '',
        pagenum: 1, // 当前页数
        pagesize: 8 // 当前每页显示的条数
      },
      totalSize: '',
      tag: [],
      total: 0,
      form: {
        name: ''
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
    };
  },


  created() {
    this.getTag()
  },

  methods: {
    // 获取全部标签
    async getTag() {
      const {data: res} = await this.$http.get("/getTag")
      this.tag = res.data;
      this.total = res.data.length
    },

    // 添加标签
    async addTag(tag) {
      const {data: res} = await this.$http.post(`/addTag/${tag}`)
      this.$message.success(res.data)
      location.reload()
    },

    // 删除标签
    async delTag(tag) {
      const {data: res} = await this.$http.post(`/delTag/${tag}`)
      this.$message.success(res.data)
      location.reload()
    },

    // 监听pagesize改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
    },

    // 监听页码值改变的事件
    handleCurrentChange(pageNum) {
      this.queryInfo.pagenum = pageNum
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

