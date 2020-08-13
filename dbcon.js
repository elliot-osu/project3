var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_youngba',
  password        : '0001',
  database        : 'cs340_youngba'
});

module.exports.pool = pool;
