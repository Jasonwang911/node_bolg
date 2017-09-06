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

module.exports = {
    result: function(res, req, next) {

    }
}