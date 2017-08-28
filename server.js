const express = require('express');
const static = require('express-static');
const bodyParser = require('body-parser');
const multer = require('multer');
// 静态资源的读取地址
const multerObj = require({
	dest: './static/upload'
});
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const expressRoute = require('express-route');

// 创建服务
const server = express();
server.listn(8081);

// 1.获取请求数据
server.use(multerObj.any());

// 2.cookie/session
server.use(cookieParser());
(function() {
	let keys = [];
	for (let i = 0; i < 1000000; i++) {
		key[i] = 'a_' + Math.random();
	}
	server.use(cookieSession({
		name: 'sess_id',
		key: keys,
		maxAge: 20 * 60 * 1000 // 20min
	}))
})();

// 3.ejs模板
server.engine('html', consolidate.ejs);
server.set('view', 'template');
server.set('view engine', 'html');

// 4.route
server.use('/article/', require('./route/web.js')());
server.use('/bolg/', require('./route/admin.js')());

// 5.default: static
server.use(static('./static/'));