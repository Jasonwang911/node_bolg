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
		db.query(`SELECT * FROM custom_evaluation_table`, (err, evaluations) => {
			if (err) {
				console.error(err);
				res.status(500).send('database error').end();
			} else {
				res.render('admin/custom.ejs', {
					evaluations
				});
			}
		});
	});

	router.post('/', (req, res) => {
		const title = req.body.title;
		const description = req.body.description;

		// 上传文件的整理--文件名的拼接
		// 扩展名
		const ext = pathLib.parse(req.files[0].originalname).ext;
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
		const oldPath = req.files[0].path;
		const newPath = req.files[0].path + ext;

		// 新文件名
		const newFileName = req.files[0].filename + ext;

		if (!title || !description || !newFileName) {
			res.status(404).send('arg error').end();
		} else {
			// 文件改名
			fs.rename(oldPath, newPath, (err) => {
				if (err) {
					console.error(err);
					res.status(500).send('file opration error').end();
				} else {
					db.query(`INSERT INTO custom_evaluation_table (title, description, src) VALUES ('${title}', '${description}', '${newFileName}')`, (err) => {
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

	return router;
};