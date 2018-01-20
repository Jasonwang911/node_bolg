var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
// jwt 相关中间键
var expressJwt = require("express-jwt");
var jwt = require("jsonwebtoken");
var shortid = require("shortid");
// jwt 相关中间键引用结束
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var multer = require('multer');
// 静态资源的读取地址
var multerObj = multer({
	dest: './static/upload'
});

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//注册ejs模板为html页。简单的讲，就是原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了
app.engine('.html', require('ejs').__express);
//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
// JWT 引入
app.use(expressJwt({
	secret: "secret"
}).unless({
	path: ["/"]
}));
app.use(function(err, req, res, next) {
	if (err.name === "UnauthorizedError") {
		res.status(401).send("invalid token");
	}
});
// 
app.use(cookieParser());
(function() {
	let keys = [];
	for (var i = 0; i < 100000; i++) {
		keys[i] = 'a_' + Math.random();
	}
	app.use(cookieSession({
		name: 'sess_id',
		keys: keys,
		maxAge: 20 * 60 * 1000 //20min
	}));
})();
app.use(multerObj.any());
// 静态文件存放地址
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

// 路由
// app.use('/', require('./routes/users.js')());
app.use('/admin/', require('./routes/admin/index.js')());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;