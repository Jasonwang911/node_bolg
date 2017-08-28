const express = require('express');

module.exports = function() {
	const router = express.Router();

	router.get('/', (req, res) => {
		res.send('这里是web页面').end();
	});

	return router;
}