import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
// axios
import api from './util/http'
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// iconfont
import '../src/assets/icon/iconfont.css'
import '../src/assets/icon/iconfont'
// markdown
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
// import 'mavon-editor/src/lib/core/hljs/lang.hljs.css'; // 代码块高亮样式
//引入marked，数据库存储数据为md文件，所以需要转译为html文件
// import marked from 'marked'
// 代码高亮
import '../src/util/hljs'

//通过marked()转译
// this.article.html = marked(this.article.content)


Vue.use(mavonEditor);
Vue.prototype.$http = api

Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
