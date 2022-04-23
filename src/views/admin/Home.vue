<template>
  <div>
    <el-container>
      <!--   侧边栏菜单   -->
      <el-aside :width="isCollapse?'64px':'200px'">
        <el-menu
            router
            unique-opened
            background-color="#99CCCC"
            text-color="white"
            active-text-color="#eb4d4b"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
        >
          <!--  logo  -->
          <el-submenu>
            <template slot="title">
              <img src="../../assets/img/logo.png" alt="" style="width: 25px;float: left;margin-top: 15px">
              <span style="text-align: center;font-size: 17px;color: white;
            margin-top: 0;margin-bottom: 0;margin-left: 7px">后台管理系统</span>
            </template>
          </el-submenu>

          <!-- 一级菜单 -->
          <el-submenu
              :index="item.id + ''"
              v-for="item in menus"
              :key="item.id"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item
                :index="'/' + subItem.path"
                v-for="subItem in item.children"
                :key="subItem.id"
            >
              <template slot="title">
                <i :class="subItem.icon"></i>
                <span>{{ subItem.name }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!--   中间主体区域   -->
      <el-container>
        <el-header>
          <div>
            <!--  折叠/展开  -->
            <span>
              <i class="el-icon-s-fold" @click="Collapse"></i>
            </span>

            <!--  面包屑  -->
            <div style="margin-top: 0;">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item
                    v-for="item in breadList"
                    :key="item.path"
                    :to="{ path: item.path }"
                >{{ item.meta.title }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>


          <el-menu router mode="horizontal">
            <!--            <el-menu-item style="font-size: 18px;">-->
            <el-menu-item style="float: right">
              <el-button size="mini" type="text" icon="el-icon-user-solid" @click="user">个人中心</el-button>
              <el-button size="mini" type="text" icon="el-icon-switch-button" @click="logout">退出</el-button>
            </el-menu-item>
          </el-menu>
        </el-header>

        <el-main style="height:auto;min-height: 700px">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menu from '../../assets/data/menu.json'

export default {
  name: "Home",
  data() {
    return {
      menus: '',
      isCollapse: false
    }
  },
  computed: {
    breadList() {
      return this.$route.matched;
    }
  },

  created() {
    this.getMenu()
  },
  methods: {
    // 获取菜单
    async getMenu() {
      const {data: res} = await this.$http.get('/menus')
      this.menus = res.data
    },
    user() {
      this.$router.push('/mg/info')
      // this.$message.info("暂未开放")
    },
    Collapse() {
      this.isCollapse = !this.isCollapse
    },
    logout() {
      sessionStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: black;
  font-size: 25px;

  > div {
    display: flex;
    align-items: center;

    span {
      margin-left: 15px;
    }

  }

  img {
    height: 60px;
    border-radius: 50%;
    margin-left: 15px;
  }

}

.el-aside {
  //background-color: #324c6d;
  height: auto;

  .el-menu {
    border-right: none;
    height: auto;
  }
}

.el-main {
  background-color: #F0F0F0
}

/* 加过渡给侧边导航*/
.el-aside {
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

/*加快侧边栏文字消失的速度*/
.el-menu {
  transition: all 10ms;
}

</style>
