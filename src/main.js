import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'

// iconfont
import '../src/assets/icon/iconfont.css'
import '../src/assets/icon/iconfont'
// markdown
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
// 代码高亮
import '../src/util/hljs'
import axios from "axios";
// 代码块高亮样式
// import 'mavon-editor/src/lib/core/hljs/lang.hljs.css';
// 引入marked，数据库存储数据为md文件，所以需要转译为html文件
// import marked from 'marked'
// 通过marked()转译
// this.article.html = marked(this.article.content)


Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:80'
Vue.use(mavonEditor);

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts
Vue.use(echarts)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
