const express = require('express');
const static = require('express-static');
const bodyParser = require('body-parser');
const multer = require('multer');
// 静态资源的读取地址
const multerObj = multer({
	dest: './static/upload'
});
// const multerObj = require('./static/upload');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const expressRoute = require('express-route');
const path = require('path');

// 创建服务
const server = express();
server.listen(8081);

// 1.获取请求数据
server.use(bodyParser.urlencoded());
server.use(multerObj.any());

// 2.cookie/session
server.use(cookieParser());
(function() {
	let keys = [];
	for (var i = 0; i < 100000; i++) {
		keys[i] = 'a_' + Math.random();
	}
	server.use(cookieSession({
		name: 'sess_id',
		keys: keys,
		maxAge: 20 * 60 * 1000 //20min
	}));
})();


// 3.ejs模板
server.engine('html', consolidate.ejs);
// server.set('views', 'template');
server.set('views', path.join(__dirname, 'template'));
server.set('view engine', 'ejs');

// 4.route
server.use('/', require('./route/web.js')());
server.use('/admin/', require('./route/admin/index.js')());

// 5.default: static
server.use(static('./static/'));