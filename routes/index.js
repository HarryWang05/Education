var express = require('express');
var router = express.Router();
const {
  dbPassword,
} = require("../info.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;


/*
SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index


/*
var mysql = require('mysql');
var name = "loginInfo";

var con = mysql.createConnection({
  host: "localhost",
  user: "fengzhang",
  password: dbPassword,
  database: name
});


//CREATES DATABASE IF IT DOESNT EXIST
var username = "smth";
var password = 'thisisapassword'

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!")
  con.query("CREATE DATABASE IF NOT EXISTS " + name, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  
  //CREATES TABLE IF IT DOESNT EXIST
  var sql = "CREATE TABLE IF NOT EXISTS userInfo (name VARCHAR(255), password VARCHAR(255), dateCreated VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table " +username +" created");
  });

  //PRINTS OUT THE DATA IN TABLE
  con.query('SELECT * FROM userInfo', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from ' +name+':');
    console.log(rows);
    numberofUSERS = rows.length;
    console.log(numberofUSERS);

    for (var i = 0; i < numberofUSERS; i++) {
      if (rows[i] == username){
        continue;
      }
      else {
        //GETS THE DATE
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        //INSERTS USERNAME AND PASSWORD INTO TABLE
        var sql = "INSERT INTO userInfo (name, password, dateCreated) VALUES ('"+username+"', '"+password+"', '"+date+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
  });
      }
    }
  });
});
*/

//Takes username, creates table and fills in username and password for this user
/*
var username = "smth";
con.connect(function(err) {
  if (err) throw err;
  var sql = "CREATE TABLE smth (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });


  con.query("SHOW DATABASES LIKE 'loginInfo'"
  , function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

});
*/


/*This can read and write from database VERY IMPORTANT
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });
*/

/*Creates a database
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
con.query("CREATE DATABASE testDB", function (err, result) {
    if (err) throw err;
    console.log("Database created");
});
});
*/

/*Creates a table in a database
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


