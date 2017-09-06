# node_bolg

> nodejs的自学实践项目，前端使用页面angular搭建，后台管理从使用ejs模板修改为使用 bootstrap + jquery ，后台技术栈 express + mySQL ,初步设想为搭建一个博客web。
> 9月5日更新： 使用express脚手架搭建项目，将后台管理ejs模板替换为bootstrap + jquery

# 文件结构
><div>|--libs &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="white-space:pre">  </span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;自定义的库</div><div>&nbsp; &nbsp; &nbsp;|--common.js &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;MD5签名</div><div>|--node_modules &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 依赖文件</div><div>|--static &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;静态文件</div><div>&nbsp; &nbsp; &nbsp;|--upload &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;用户上传的文件</div><div>|--template &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;模板</div><div>&nbsp; &nbsp; &nbsp;|--admin</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |--components &nbsp; &nbsp; &nbsp;公用组件文件夹</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |--</div><div>&nbsp; &nbsp; &nbsp;|--web</div><div>|--route &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;路由</div><div>&nbsp; &nbsp; &nbsp;|--admin</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |--login.ejs &nbsp; &nbsp;<span style="white-space:pre">  </span>&nbsp; &nbsp; &nbsp; &nbsp; 管理员登录&nbsp;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |--index.ejs &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;后台管理首页</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |--banners.ejs &nbsp; &nbsp; &nbsp; &nbsp;后台管理banner页</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |--custom.ejs &nbsp; &nbsp; &nbsp; &nbsp; 后台管理custom页</div><div>&nbsp; &nbsp; &nbsp;|--web</div><div>|--package.json</div><div>|--server.js</div>


# 关于mySQL

> 数据库暂时存放于 mySQL 文件夹下 

#
> QQ： 773983210
> 欢迎一同学习，一起进步

# 遇到的问题简单的记录
> &nbsp; &nbsp;报错 ： The header content contains invalid characters  升级 express-static 到 1.1.0 以上版本，解决<br />
> &nbsp; &nbsp;评价管理部分，在处理头像上传的过程中分为添加和修改，修改部分又分为有头像上传的修改和无头像上传的修改， 需要在 fs.rename 的回调中分别进行处理 <br />
> &nbsp; &nbsp;在处理文件上传的时候 表单中必须添加 enctype="multipart/form-data" 否则 req.files 为 undefined
>一、创建一个express项目
>    1.全局安装express 
>        npm install -g express
>   2.创建一个名称为demo的项目（默认为jade模板，这里使用ejs模板）
>        express -e demo
>    3.cd到demo下，下载项目依赖
>        npm install 
>    4.启动
>        npm start