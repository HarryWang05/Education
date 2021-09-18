var express = require('express');
var router = express.Router();

const dotenv = require('dotenv');
dotenv.config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "fengzhang",
  password: process.env.dbPassword
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


//This can read and write from database VERY IMPORTANT
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });


//Creates a database
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
con.query("CREATE DATABASE testDB", function (err, result) {
    if (err) throw err;
    console.log("Database created");
});
});
*/
/* Creates a table in a database
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

  //INSERT INTO TABLES
  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
  */

module.exports = router;
