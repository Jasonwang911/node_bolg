const express = require('express');
const common = require('../libs/common');
const mysql = require('mysql');

// 创建连接池
const db = mysql.createPool({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: 'root',
	database: 'learn'
})

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

	// 登陆页面
	router.get('/login', (req, res) => {
		router.render('admin/login.ejs', {});
	});

	// 处理登陆页面的表单操作
	router.post('/login', (req, res) => {
		const username = req.body.username;
		const password = common.md5(req.body.password + common.MD5_SUFFIX);
	})
}