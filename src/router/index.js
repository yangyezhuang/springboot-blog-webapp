import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../views/front/Index'
import Category from "../views/front/main/Category";
import Archive from "../views/front/main/Archive";
import Detail from "../views/front/main/Detail";
import Search from "../views/front/main/Search";
import Message from "../views/front/main/Message";
import About from "../views/front/other/About";
import Error from '../views/front/other/404'
import User from "../views/front/user/User";
import UserInfo from "../views/front/user/UserInfo";
import UserArticle from "../views/front/user/UserArticle";
import UserWrite from "../views/front/user/UserWrite";
import BreadCrumb from "../views/admin/other/BreadCrumb";
import Login from "../views/admin/login/Login";
import Welcome from "../views/admin/home/Welcome";
import Home from "../views/admin/Home";
import ArticleMg from "../views/admin/articeMg/ArticleList";
import Push from "../views/admin/articeMg/Write";
import Edit from "../views/admin/articeMg/Edit";
import TagMg from "../views/admin/tagMg/TagMg";
import Setting from "../views/admin/setting/Setting";
import UserCollect from "../views/front/user/UserCollect";
import UserList from "../views/admin/userMg/UserList";
import Sex from '../views/admin/statistic/Sex'
import CommentList from "../views/admin/commentMg/CommentList";
import UserPage from "../views/front/main/UserPage";
import MessageList from "../views/admin/msgMg/MessageList";
import NoticeList from "../views/admin/msgMg/NoticeList";
import TagPage from "../views/front/main/TagPage";
import CategoryStatistic from "../views/admin/statistic/CategoryStatistic";
import PvStatistic from "../views/admin/statistic/PvStatistic";
import InfoCenter from "../views/admin/other/InfoCenter";
import UserData from "../views/front/user/UserData";
import UpdateInfoDialog from "../views/admin/userMg/UpdateInfoDialog";

const routes = [
    {
        path: '/',
        component: Index
    },

    {
        path: '/article/:id',
        component: Detail,
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/archive',
        component: Archive,
    }, {
        path: '/search/:keyword',
        component: Search,
    },
    {
        path: '/tags/:tag',
        component: TagPage
    },
    {
        path: '/uid/:uid',
        component: UserPage
    },

    {
        path: '/user',
        component: User,
        redirect: '/user/article',
        children: [
            {path: 'info', component: UserInfo},
            {path: 'article', component: UserArticle},
            {path: 'collect', component: UserCollect},
            {path: 'write', component: UserWrite},
            {path: 'data', component: UserData},
        ]
    },
    {
        path: '/message',
        component: Message,
    }, {
        path: '/about',
        component: About,
    },
    {
        path: '/404',
        component: Error,
    },

    // admin
    {
        path: '/admin',
        component: Login,

    },

    // 后台路由
    {
        path: '/mg',
        component: Home,
        redirect: '/mg/welcome',
        meta: {title: '首页'},
        children: [
            {path: 'info', component: InfoCenter, meta: {title: '个人中心'}},
            {path: 'welcome', component: Welcome, meta: {title: '欢迎页'}},
            {
                path: 'userManager',
                component: BreadCrumb,
                meta: {title: '用户管理'},
                children: [
                    {path: 'users', component: UserList, meta: {title: '用户列表'}},
                    {path: 'userInfo/:uid', component: UpdateInfoDialog, meta: {title: '信息修改'}}
                ]
            },
            {
                path: 'articleManager',
                component: BreadCrumb,
                meta: {title: '文章管理'},
                children: [
                    {path: 'article', component: ArticleMg, meta: {title: '文章管理'}},
                    {path: 'write', component: Push, meta: {title: '创作中心'}},
                    {path: 'edit/:id', component: Edit, meta: {title: '创作中心'}},
                ]
            },
            {
                path: 'tagManager',
                component: BreadCrumb,
                meta: {title: '标签管理'},
                children: [
                    {path: 'tag', component: TagMg, meta: {title: '标签管理'}}
                ]
            },
            {
                path: 'commentManager',
                component: BreadCrumb,
                meta: {title: '评论管理'},
                children: [
                    {path: 'comment', component: CommentList, meta: {title: '评论管理'}}
                ]
            },
            {
                path: 'msgManager',
                component: BreadCrumb,
                meta: {title: '留言公告'},
                children: [
                    {path: 'message', component: MessageList, meta: {title: '留言管理'}},
                    {path: 'notice', component: NoticeList, meta: {title: '公告管理'}}
                ]
            },
            {
                path: 'dataManager',
                component: BreadCrumb,
                meta: {title: '数据统计'},
                children: [
                    {path: 'sex', component: Sex, meta: {title: '性别统计'}},
                    {path: 'category', component: CategoryStatistic, meta: {title: '类别统计'}},
                    {path: 'pv', component: PvStatistic, meta: {title: '用户访问量'}},
                ]
            },
            {
                path: 'settings',
                component: BreadCrumb,
                meta: {title: '网站设置'},
                children: [
                    {path: 'setting', component: Setting, meta: {title: '设置'}},
                ]
            }
        ]
    },

    // 重定向404
    {
        path: '*',
        redirect: '/404'
    },


]

const router = new VueRouter({
    mode: "history",
    routes
})


// 挂在路由导航守卫
// router.beforeEach((to, from, next) => {
//     //    to 将要访问的路径
//     //    from 代表从哪个路径跳转而来
//     //    next 是一个函数，表示放行
//     //    next() 放行  next('/login') 强制转跳
//     if (
//         // 如果访问以下路径，直接放行
//         to.path == '/login' ||
//         to.path == '/blog' ||
//         to.path == '/archives' ||
//         to.path == '/tag' ||
//         to.path == '/about') {
//         return next();
//     }
//     //  获取token，有token就放行，没有则返回登录界面
//     const tokenStr = window.sessionStorage.getItem('token')
//     if (!tokenStr) return next('/login')
//     next()
// })

export default router
