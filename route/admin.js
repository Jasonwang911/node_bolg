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
		res.render('admin/login.ejs', {});
	});

	// 处理登陆页面的表单操作
	router.post('/login', (req, res) => {
		// 获取登录页面用户输入的账号密码
		const username = req.body.username;
		const password = common.md5(req.body.password + common.MD5_SUFFIX);

		// 连接数据库，并查询账号密码
		db.query(`SELECT * FROM admin_table WHERE username='${username}'`, (err, data) => {
			if (err) { // 连接失败
				console.error(err);
				res.status(500).send('database error').end();
			} else {
				if (data.length === 0) { // 没有查询到数据
					res.status(400).send('no this admin').end();
				} else {
					if (data[0].password === password) { // 密码正确，登录成功
						req.session['admin_id'] = data[0].ID;
						res.redirect('/admin/');
					} else { // 密码错误，登录失败
						res.status(400).send('this password is incorrect').end();
					}
				}
			}
		})
	});

	// 访问根目录 / 的路由
	router.get('/', (req, res) => {
		res.render('admin/index.ejs', {});
	});

	return router;
}