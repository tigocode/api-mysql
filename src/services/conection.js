const mysql = require('mysql2/promise.js');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'userlibertadores',
  password: '1234',
  database: 'libertadoresdb'
});

module.exports = pool;
