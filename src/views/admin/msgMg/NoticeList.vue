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
        <el-col :span="4">
          <el-button @click="openNoticeDialog()">发布公告</el-button>
        </el-col>

        <el-dialog title="发布公告" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="公告名称" :label-width="formLabelWidth">
              <el-input v-model="form.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="公告内容" :label-width="formLabelWidth">
              <el-input v-model="form.content" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="发布者" :label-width="formLabelWidth">
              <el-input v-model="form.author" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addNotice()">确 定</el-button>
          </div>
        </el-dialog>
      </el-row>

      <!-- 列表 -->
      <el-table :data="noticeList.slice((queryInfo.pagenum-1)*queryInfo.pagesize,queryInfo.pagenum*queryInfo.pagesize)"
                border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="id" prop="id" width="100px"></el-table-column>
        <el-table-column label="标题" prop="title" width="150px"></el-table-column>
        <el-table-column label="内容" prop="content" show-overflow-tooltip></el-table-column>
        <el-table-column label="发布者" prop="author" show-overflow-tooltip width="120px"></el-table-column>
        <el-table-column label="日期" prop="date" show-overflow-tooltip width="160px"></el-table-column>
        <el-table-column label="操作" width="80px">
          <template v-slot="scope">
            <el-button type="danger" icon="el-icon-delete" @click="delNotice(scope.row.id)"></el-button>
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
  name: "NoticeList",
  data() {
    return {
      form: {
        title: '',
        content: '',
        author: '网站管理员'
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      noticeList: '',
      queryInfo: {
        query: '',
        pagenum: 1, // 当前页数
        pagesize: 8 // 当前每页显示的条数
      },
      totalSize: '',
      total: 0,
    }
  },
  created() {
    this.getNotices()
  },
  methods: {
    async getNotices() {
      const {data: res} = await this.$http.get(`/notices`)
      this.noticeList = res.data
    },

    openNoticeDialog() {
      this.dialogFormVisible = true
    },

    // 添加公告
    async addNotice() {
      const {data: res} = await this.$http.post(`/notices`, this.form)
      if (res.code === 1) {
        Message.success('发布成功')
        location.reload()
      }
    },

    // 删除公告
    delNotice(id) {
      this.$confirm('是否删除该公告?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete(`/notices/${id}`).then((res) => {
          // if (res.code === 1)
          //   location.reload()
          Message.success("删除成功")
          location.reload()
        })
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
