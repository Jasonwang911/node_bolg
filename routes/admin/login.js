const express = require('express');
const common = require('./../../libs/common');
const mysql = require('mysql');
var expressJwt = require("express-jwt");
var jwt = require("jsonwebtoken");
var shortid = require("shortid");

const db = mysql.createPool({
	host: 'localhost',
	prot: '3306',
	user: 'root',
	password: 'root',
	database: 'learn'
});

module.exports = function() {
	const router = express.Router();

	// 登陆页面
	router.get('/', (req, res) => {
		res.render('admin/login.html');
	});

	// 处理登陆页面的表单操作
	router.post('/', (req, res) => {
		// res.setHeader("Access-Control-Allow-Origin", "*");
		var authToken = jwt.sign({
			username: username
		}, "secret");
		res.status(200).json({
			token: authToken
		});
		// 获取登录页面用户输入的账号密码,
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
						res.json({
							code: '200',
							data: {
								userID: data[0].ID,
								username: data[0].username
							}
						}).end();
						// res.redirect('/admin/');
					} else { // 密码错误，登录失败
						res.status(400).send('this password is incorrect').end();
					}
				}
			}
		})
	});

	return router;
};