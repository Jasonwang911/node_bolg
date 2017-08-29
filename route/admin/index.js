const express = require('express');
const common = require('./../../libs/common');
const mysql = require('mysql');

// 创建连接池
const db = mysql.createPool({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: 'root',
	database: 'learn'
});

module.exports = function() {
	// 创建路由
	const router = express.Router();

	// 检查登陆状态
	router.use((req, res, next) => {
		if (!req.session['admin_id'] && req.url != '/login') { // 没有登陆
			// 路由重定向到登陆页面
			res.redirect('/admin/login');
		} else {
			next();
		}
	});

	// 访问根目录 / 的路由
	router.get('/', (req, res) => {
		res.render('admin/index.ejs', {});
	});

	// 处理登陆页面的表单操作
	router.use('/login', require('./login')());

	// 后台管理首页--导航页的路由
	router.use('/banners', require('./banner')());

	return router;
}