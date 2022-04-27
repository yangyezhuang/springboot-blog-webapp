<template>
  <div class="main" style="height: auto;">
    <el-card>
      <!-- 搜索 -->
      <el-row>
        <el-col :span="3">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button icon="" @click="addUser()">创建用户</el-button>
        </el-col>
        <add-user-dialog :visible.sync="visible"></add-user-dialog>
      </el-row>

      <!-- 列表 -->
      <el-table :data="userList.slice((queryInfo.pagenum-1)*queryInfo.pagesize,queryInfo.pagenum*queryInfo.pagesize)"
                border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="操作" width="62px">
          <template v-slot="scope">
            <el-avatar> {{scope.row.username}} </el-avatar>
          </template>
          <update-info-dialog :visible.sync="updateVisible"></update-info-dialog>
        </el-table-column>
        <el-table-column label="id" prop="id" width="120px"></el-table-column>
        <el-table-column label="用户名" prop="username" width="180px"></el-table-column>
        <el-table-column label="密码" prop="password" show-overflow-tooltip width="180px"></el-table-column>
        <el-table-column label="备注" prop="" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="150px">
          <template v-slot="scope">
            <el-button type="primary" icon="el-icon-edit" @click="updateUser(scope.row.id)"></el-button>
            <el-button type="danger" icon="el-icon-delete" @click="delUser(scope.row.id)"></el-button>
          </template>
          <update-info-dialog :visible.sync="updateVisible"></update-info-dialog>
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
import AddUserDialog from "./AddUserDialog";
import UpdateInfoDialog from "./UpdateInfoDialog";
import {Message} from "element-ui";

export default {
  name: "UserList",
  components: {
    AddUserDialog,
    UpdateInfoDialog
  },
  data() {
    return {
      queryInfo: {
        query: '',
        pagenum: 1, // 当前页数
        pagesize: 8 // 当前每页显示的条数
      },
      totalSize: '',
      userList: '',
      total: 0,
      visible: false,
      updateVisible: false
    }
  },
  created() {
    this.getAll()
  },
  methods: {
    // 获取全部用户
    async getAll() {
      const {data: res} = await this.$http.get("/user/list")
      this.userList = res.data;
      this.total = res.data.length
    },

    addUser() {
      this.visible = true
    },

    //  编辑课程信息
    updateUser(id) {
      this.updateVisible = true
    },

    // 根据 id 删除用户
    delUser(id) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete(`/user/del/${id}`).then((res) => {
          // if (res.code === 1)
          //   location.reload()
          Message.success("取消收藏")
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
}
</script>

<style scoped>

</style>
