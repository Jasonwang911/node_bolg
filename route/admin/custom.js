const express = require('express');
const common = require('./../../libs/common');
const mysql = require('mysql');
const pathLib = require('path');
const fs = require('fs');

const db = mysql.createPool({
	host: 'localhost',
	prot: '3306',
	user: 'root',
	password: 'root',
	database: 'learn'
});

module.exports = function() {
	const router = express.Router();

	router.get('/', (req, res) => {
		switch (req.query.act) {
			case 'mod': // 修改 -- 弹出修改弹窗并查询需要修改的这条数据
				db.query(`SELECT * FROM custom_evaluation_table WHERE ID='${req.query.id}'`, (err, data) => {
					if (err) {
						console.error(err);
						res.status(500).send('database error').end();
					} else if (data.length == 0) {
						res.status(404).send('no this custom evaluation').end();
					} else {
						// 返回页面数据 和 需要修改的 mod_data 数据
						db.query(`SELECT * FROM custom_evaluation_table`, (err, evaluations) => {
							if (err) {
								console.error(err);
								res.status(500).send('database error').end();
							} else {
								res.render('admin/custom', {
									evaluations,
									mod_data: data[0]
								});
							}
						});
					}
				});
				break;
			case 'del': // 删除
				db.query(`SELECT * FROM custom_evaluation_table WHERE ID='${req.query.id}'`, (err, data) => {
					if (err) {
						console.error(err);
						res.status(500).send('database error').end();
					} else if (data.length == 0) {
						res.status(404).send('no this custom evaluation').end();
					} else {
						// 先使用 fs.unlink 删除静态图片资源，再删除数据库
						fs.unlink('static/upload/' + data[0].src, (err) => {
							if (err) {
								console.error(err);
								res.status(500).send('file opration error').end();
							} else {
								// 删除数据库
								db.query(`DELETE FROM custom_evaluation_table WHERE ID='${req.query.id}'`, (err, data) => {
									if (err) {
										console.error(err);
										res.status(500).send('database error').end();
									} else {
										res.redirect('/admin/custom');
									}
								});
							}
						});
					}
				});
				break;
			default:
				db.query(`SELECT * FROM custom_evaluation_table`, (err, evaluations) => {
					if (err) {
						console.error(err);
						res.status(500).send('database error').end();
					} else {
						res.render('admin/custom', {
							evaluations
						});
					}
				});
				break;
		}

	});

	router.post('/', (req, res) => {
		const title = req.body.title;
		const description = req.body.description;

		// 修改中 -- 分两种情况 1、用户修改头像。 2、用户不修改头像
		if (req.files[0]) {
			// 上传文件的整理--文件名的拼接
			// 扩展名
			var ext = pathLib.parse(req.files[0].originalname).ext;
			// req.files[0] 为如下内容
			// { fieldname: 'href',
			//   originalname: 'QQ截图20170815115659.png',
			//   encoding: '7bit',
			//   mimetype: 'image/png',
			//   destination: './static/upload',
			//   filename: '8eb01a5d15b9fb76f952c2aeb5f8fbff',
			//   path: 'static\\upload\\8eb01a5d15b9fb76f952c2aeb5f8fbff',
			//   size: 74302 }
			// 新文件名的路径加文件名
			var oldPath = req.files[0].path;
			var newPath = req.files[0].path + ext;
			// 新文件名
			var newFileName = req.files[0].filename + ext;
		} else {
			var newFileName = null;
		}

		if (!title || !description) {
			res.status(404).send('arg error').end();
		} else {
			if (newFileName) { // 请求中有文件上传
				fs.rename(oldPath, newPath, (err) => {
					if (err) {
						console.error(err);
						res.status(500).send('file opration error').end();
					} else {
						if (req.body.mod_id) { //  有文件上传的修改
							// 先删除原来的文件再添加
							db.query(`SELECT * FROM custom_evaluation_table WHERE ID='${req.body.mod_id}'`, (err, data) => {
								if (err) {
									console.error(err);
									res.status(500).send('database error').end();
								} else if (data.length == 0) {
									res.status(404).send('no this custom evaluation').end();
								} else {
									fs.unlink('static/upload/' + data[0].src, (err) => {
										if (err) {
											console.error(err);
											res.status(500).send('file opration error').end();
										} else {
											db.query(`UPDATE custom_evaluation_table SET \
						                      title='${title}', description='${description}', \
						                      src='${newFileName}' \
						                      WHERE ID=${req.body.mod_id}`, (err) => {
												if (err) {
													console.error(err);
													res.status(500).send('database error').end();
												} else {
													res.redirect('/admin/custom');
												}
											});
										}
									});
								}
							});
						} else { //  有文件上传的添加
							db.query(`INSERT INTO custom_evaluation_table (title, description, src) VALUES ('${title}', '${description}', '${newFileName}')`, (err) => {
								if (err) {
									console.error(err);
									res.status(500).send('database error').end();
								} else {
									res.redirect('/admin/custom');
								}
							});
						}
					}
				});
			} else { // 请求中没有文件上传
				if (req.body.mod_id) { // 请求中没有文件上传的修改
					db.query(`SELECT * FROM custom_evaluation_table WHERE ID=${req.body.mod_id}`, (err, data) => {
						if (err) {
							console.error(err);
							res.status(500).send('database error').end();
						} else if (data.length == 0) {
							res.status(404).send('no this custom evaluation').end();
						} else {
							db.query(`UPDATE custom_evaluation_table SET \
					          title='${title}', description='${description}' \
					          WHERE ID=${req.body.mod_id}`, (err) => {
								if (err) {
									console.error(err);
									res.status(500).send('database error').end();
								} else {
									res.redirect('/admin/custom');
								}
							});
						}
					});
				} else { // 添加
					db.query(`INSERT INTO custom_evaluation_table (title,description,src) VALUES ('${title}', '${description}', '${newFileName}')`, (err) => {
						if (err) {
							console.error(err);
							res.status(500).send('database error').end();
						} else {
							res.redirect('/admin/custom');
						}
					});
				}
			}
		}
	});

	return router;
};