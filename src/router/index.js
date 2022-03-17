import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index'
import Category from "../views/Category";
import Archive from "../views/Archive";
import Detail from "../views/Detail";
import Search from "../views/Search";
import About from "../views/About";
import Error from '../views/404'

import Login from "../views/admin/Login";
import Home from "../views/admin/Home";
import BlogList from "../views/admin/BlogManage";
import Push from "../views/admin/Write";
import Edit from "../views/admin/Edit";
import TagManage from "../views/admin/TagManage";


Vue.use(VueRouter)


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
        path: '/about',
        component: About,
    }, {
        path: '/404',
        component: Error,
    },

    // admin
    {
        path: '/admin',
        component: Login,

    }, {
        path: '/mg',
        component: Home,
        children: [
            {path: 'home', component: BlogList},
            {path: 'push', component: Push},
            {path: 'edit/:id', component: Edit},
            {path: 'tag', component: TagManage},
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
