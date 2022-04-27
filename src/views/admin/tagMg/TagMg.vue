<template>
  <div class="main" style="height: auto;">
    <el-card style="height: auto">
      <!--  添加标签  -->
      <el-row :gutter="10">
        <el-col :span="4">
          <el-button @click="addTag">添加标签</el-button>
        </el-col>
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
import {Message} from "element-ui";

export default {
  name: "TagManage",
  data() {
    return {
      queryInfo: {
        query: '',
        pagenum: 1, // 当前页数
        pagesize: 8 // 当前每页显示的条数
      },
      totalSize: '',
      tag: [],
      total: 0
    };
  },


  created() {
    this.getTag()
  },

  methods: {
    // 获取全部标签
    async getTag() {
      const {data: res} = await this.$http.get("/tags")
      this.tag = res.data;
      this.total = res.data.length
    },

    // 添加标签
    addTag() {
      this.$prompt('请输入标签', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputErrorMessage: '格式不正确'
      }).then(({value}) => {
        this.$http.post(`/tags/${value}`)
        this.$message.success('创建成功');
        location.reload()
      }).catch(() => {
        this.$message.info('取消输入');
      });
    },

    // 删除标签
    delTag(tag) {
      this.$confirm('此操作将永久删除该标签, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete(`/tags/${tag}`).then((res) => {
          // if (res.code === 1)
          //   location.reload()
          Message.success("删除成功")
          location.reload()
        })
      })
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

