const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

// set up connection
const connection = mysql.createConnection(mysqlConfig);
connection.connect();

connection.end();