## Sun博客系统

### 简介

> Sun博客系统基于Vue2 + SpringBoot，整体风格为简约型。项目持续更新~。
V部落是一个多用户博客管理平台，采用Vue+SpringBoot开发。


<br>

### 技术栈

#### 后端技术栈
后端主要采用了：

1. SpringBoot
2. SpringSecurity

3.MyBatis

4.部分接口遵循Restful风格

5.MySQL

#### 前端技术栈
前端主要采用了：

1.Vue
2.axios
3.ElementUI
4.vue-echarts
5.mavon-editor
6.vue-router

还有其他一些琐碎的技术我就不在这里一一列举了。


快速运行
1.克隆本项目到本地

git@github.com:lenve/VBlog.git
2.找到blogserver项目中resources目录下的vueblog.sql文件，在MySQL数据库中执行
3.根据自己本地情况修改数据库配置，数据库配置在SpringBoot项目的application.properties中
4.在IntelliJ IDEA中运行blogserver项目

OK，至此，服务端就启动成功了，此时我们直接在地址栏输入http://localhost:8081/index.html即可访问我们的项目，如果要做二次开发，请继续看第五、六步。

5.进入到vueblog目录中，在命令行依次输入如下命令：

# 安装依赖
npm install

# 在 localhost:8080 启动项目
npm run dev
由于我在vueblog项目中已经配置了端口转发，将数据转发到SpringBoot上，因此项目启动之后，在浏览器中输入http://localhost:8080就可以访问我们的前端项目了，所有的请求通过端口转发将数据传到SpringBoot中（注意此时不要关闭SpringBoot项目）。

6.最后可以用WebStorm等工具打开vueblog项目，继续开发，开发完成后，当项目要上线时，依然进入到vueblog目录，然后执行如下命令：

npm run build
该命令执行成功之后，vueblog目录下生成一个dist文件夹，将该文件夹中的两个文件static和index.html拷贝到SpringBoot项目中resources/static/目录下，然后就可以像第4步那样直接访问了。

步骤5中需要大家对NodeJS、NPM等有一定的使用经验，不熟悉的小伙伴可以先自行搜索学习下，推荐Vue官方教程。

项目依赖
1.vue-echarts
2.mavonEditor

License
MIT

<br>

### 项目截图

[![L67Lyd.md.png](https://s1.ax1x.com/2022/04/21/L67Lyd.md.png)](https://imgtu.com/i/L67Lyd)
[![L67bSe.md.png](https://s1.ax1x.com/2022/04/21/L67bSe.md.png)](https://imgtu.com/i/L67bSe)
[![L67qQH.md.png](https://s1.ax1x.com/2022/04/21/L67qQH.md.png)](https://imgtu.com/i/L67qQH)
[![L677WD.md.png](https://s1.ax1x.com/2022/04/21/L677WD.md.png)](https://imgtu.com/i/L677WD)
[![L67TJO.md.png](https://s1.ax1x.com/2022/04/21/L67TJO.md.png)](https://imgtu.com/i/L67TJO)
[![L67OOA.md.png](https://s1.ax1x.com/2022/04/21/L67OOA.md.png)](https://imgtu.com/i/L67OOA)
[![L67jeI.md.png](https://s1.ax1x.com/2022/04/21/L67jeI.md.png)](https://imgtu.com/i/L67jeI)
[![L67vwt.md.png](https://s1.ax1x.com/2022/04/21/L67vwt.md.png)](https://imgtu.com/i/L67vwt)
[![L67xTP.md.png](https://s1.ax1x.com/2022/04/21/L67xTP.md.png)](https://imgtu.com/i/L67xTP)
[![L6HSFf.md.png](https://s1.ax1x.com/2022/04/21/L6HSFf.md.png)](https://imgtu.com/i/L6HSFf)


## 功能

### 已经完成功能

- [x] 登录
- [x] 注册
- [x] 文章列表
- [x] 文章归档
- [x] 文章详情（支持代码语法高亮）
- [x] 标签
- [x] 关于
- [x] 点赞与评论
- [ ] 留言
- [ ] 历程
- [ ] 文章详情目录
- [ ] 移动端适配
- [ ] github 授权登录
<hr>
感谢大家的耐心阅读，如有建议请私信或评论留言
