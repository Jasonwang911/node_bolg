const express = require('express');
const common = require('./../../libs/common');
const mysql = require('mysql');

const db = mysql.createPool({
	host: 'localhost',
	prot: '3306',
	user: 'root',
	password: 'root',
	database: 'learn'
});

module.exports = function() {
	const router = express.Router();

	// 后台管理首页--导航页的路由
	router.get('/', (req, res) => {
		switch (req.query.act) {
			case 'mod': // 修改
				db.query(`SELECT * FROM banner_table WHERE ID=${req.query.id}`, (err, data) => {
					if (err) {
						console.error(err);
						res.status(500).send('database error').end();
					} else if (data.length == 0) {
						res.status(404).send('data not found').end();
					} else {
						db.query(`SELECT * FROM banner_table`, (err, banners) => {
							res.render('admin/banners.ejs', {
								banners,
								mod_data: data[0]
							});
						});
					}
				});
				break;
			case 'del': // 删除
				db.query(`DELETE FROM banner_table WHERE ID='${req.query.id}'`, (err, data) => {
					if (err) {
						console.error(err);
						res.status(500).send('database error').end();
					} else {
						res.redirect('/admin/banners');
					}
				});
				break;
			default:
				db.query(`SELECT * FROM banner_table`, (err, banners) => {
					if (err) {
						console.error(err);
						res.status(500).send('database error').end();
					} else {
						res.render('admin/banners.ejs', {
							banners
						});
					}
				});
				break;
		}
	});

	router.post('/', (req, res) => {
		// 获取接收到的数据
		const title = req.body.title;
		const description = req.body.description;
		const href = req.body.href;

		if (!title || !description || !href) {
			res.status(400).send('arg error').end();
		} else {
			console.log(req.body);
			if (req.body.mod_id) { // 修改
				db.query(`UPDATE banner_table SET title='${title}',description='${description}',href='${href}' WHERE ID='${req.body.mod_id}'`, (err) => {
					if (err) {
						console.error(err);
						res.status(500).send('database error').end();
					} else {
						res.redirect('/admin/banners');
					}
				});
			} else { // 添加
				db.query(`INSERT INTO banner_table (title,description,href) VALUES ('${title}','${description}','${href}')`, (err) => {
					if (err) {
						console.error(err);
						res.status(500).send('database error').end();
					} else {
						res.redirect('/admin/banners');
					}
				});
			}
		}
	});

	return router;
};