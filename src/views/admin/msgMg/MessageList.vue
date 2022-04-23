<template>
  <div class="main" style="height: auto;">
    <el-card>
      <!-- 搜索 -->
      <el-row>
        <el-col :span="4">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>

      <!-- 列表 -->
      <el-table :data="msgList.slice((queryInfo.pagenum-1)*queryInfo.pagesize,queryInfo.pagenum*queryInfo.pagesize)"
                border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="id" prop="id" width="100px"></el-table-column>
        <el-table-column label="姓名" prop="name" width="100px"></el-table-column>
        <el-table-column label="邮箱" prop="email" show-overflow-tooltip width="120px"></el-table-column>
        <el-table-column label="手机号" prop="phone" show-overflow-tooltip width="120px"></el-table-column>
        <el-table-column label="内容" prop="content" show-overflow-tooltip></el-table-column>
        <el-table-column label="日期" prop="date" show-overflow-tooltip width="160px"></el-table-column>
        <el-table-column label="操作" width="80px">
          <template v-slot="scope">
            <el-button type="danger" icon="el-icon-delete" @click="delMessage(scope.row.id)"></el-button>
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
  name: "MessageList",
  data() {
    return {
      msgList: '',
      queryInfo: {
        query: '',
        pagenum: 1, // 当前页数
        pagesize: 8 // 当前每页显示的条数
      },
      totalSize: '',
      userList: '',
      total: 0,
    }
  },
  created() {
    this.getMessages()
  },
  methods: {
    async getMessages() {
      const {data: res} = await this.$http.get(`/messages`)
      this.msgList = res.data
    },

    delMessage(id) {
      this.$confirm('是否删除该留言?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete(`/messages/${id}`).then((res) => {
          // if (res.code === 1)
          //   location.reload()
          Message.success("删除成功")
          location.reload()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
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
}
</script>

<style scoped>

</style>
