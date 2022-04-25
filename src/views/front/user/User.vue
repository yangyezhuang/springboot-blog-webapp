<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 1200px;min-height: 650px;margin: 0 auto">
        <el-container>
          <!--   侧边栏菜单   -->
          <el-aside width="250px">
            <!--  介绍卡片   -->
            <el-card>
              <div v-show="userInfoShow=true" @click="$router.push(`/user/article`)">
                <el-avatar style="background-color: gold" :size="55">{{ username }}</el-avatar>
                <h3>{{ username }}</h3>
              </div>
              <i class="el-icon-edit-outline" @click="addDesc"> 还没有介绍哦...</i>
              <p>
                <span style="margin-right: 20px">关注：12 </span>
                <span>粉丝：9999+</span>
              </p>
              <el-divider></el-divider>
              <div style="margin-right: 10px">
                <a :href="tag.url" v-for="tag in infoTag" style="text-decoration: none">
                  <svg class="icon" aria-hidden="true">
                    <use :xlink:href="tag.icon"></use>
                  </svg> &nbsp;
                </a>
              </div>
            </el-card>
            <!-- 搜索 -->
            <el-input placeholder="请输入相关内容" v-model="keyword">
              <el-button slot="append" icon="el-icon-search" @click="search(keyword)"></el-button>
            </el-input>
            <!--  菜单  -->
            <el-menu
                router
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
              <el-menu-item v-for="menu in menus" :index="menu.path">
                <template slot="title">
                  <i :class="menu.icon"></i>
                  <span>{{ menu.title }}</span>
                </template>
              </el-menu-item>
            </el-menu>
          </el-aside>

          <!--   中间主体区域   -->
          <el-container>
            <el-main style="margin-top: -20px">
              <el-card style="height:auto;min-height: 600px;">
                <router-view></router-view>
              </el-card>
            </el-main>
          </el-container>
        </el-container>
      </div>
    </el-main>

    <Footer></Footer>

  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default {
  name: "User",
  components: {Header, Footer},
  data() {
    return {
      username: sessionStorage.getItem('username'),
      uid: sessionStorage.getItem("uid"),
      keyword: '',
      infoTag: [
        {icon: '#icon-github', url: 'https://github.com/yangyezhuang'},
        {icon: '#icon-csdn', url: 'https://blog.csdn.net/qq_47183158'},
        {icon: '#icon-youxiang', url: ''},
        {icon: '#icon-twitter', url: ''}
      ],

      menus: [
        {
          path: '/user/info',
          title: '个人信息',
          icon: 'el-icon-location'
        },
        {
          path: '/user/article',
          title: '我的文章',
          icon: 'el-icon-s-order'
        },
        {
          path: '/user/collect',
          title: '我的收藏',
          icon: 'el-icon-star-on'
        },
        {
          path: '/user/write',
          title: '创作中心',
          icon: 'el-icon-edit'
        },
        {
          path: '/user/data',
          title: '数据展示',
          icon: 'el-icon-s-data'
        }
      ]
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    addDesc() {
      this.$prompt('不得超过100字', '个人介绍', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputErrorMessage: '格式不正确'
      }).then(({value}) => {
        this.$http.post(`/tags/${value}`)
        this.$message.success('保存成功');
        location.reload()
      });
    },
    getUserInfo() {
      this.uid = this.$route.params.uid
    },

    search(keyword) {
      // this.$router.push(`/search/${keyword}`)
      this.$message.info('暂未开放')
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
