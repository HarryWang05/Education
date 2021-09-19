const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const name = "loginInfo";
const {
    dbPassword,
} = require("../info.json");


router.get('/', function(req, res, next) {
    res.render('signup', {
        title: 'Express'
    });
});

router.post('/', function(req, res) {
    let password = req.body["password"];
    console.log(username);
    console.log(password);
    console.log("signup");


    //ADDS THE USER TO THE DATABASE
    var con = mysql.createConnection({
        host: "localhost",
        user: "fengzhang",
        password: dbPassword,
        database: name
    });


    //CREATES DATABASE IF IT DOESNT EXIST
    //var username = "smth";
    //var password = 'thisisapassword'

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!")
        con.query("CREATE DATABASE IF NOT EXISTS " + name, function(err, result) {
            if (err) throw err;
            console.log("Database created");
        });

        //CREATES TABLE IF IT DOESNT EXIST
        var sql = "CREATE TABLE IF NOT EXISTS userInfo (name VARCHAR(255), password VARCHAR(255), dateCreated VARCHAR(255))";
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Table " + username + " created");
        });

        //PRINTS OUT THE DATA IN TABLE
        con.query('SELECT * FROM userInfo', (err, rows) => {
            if (err) throw err;
            numberofUSERS = rows.length;
            console.log(numberofUSERS);
            var duplicatedUser = false;
            
            //If username already exists
            for (var i = 0; i < numberofUSERS; i++) {
                if (rows[i]["name"] == username){
                    duplicatedUser = true;
                }
            }
            
            //If user doesn't exist on the database 
            if (duplicatedUser == false) {
                //GETS THE DATE
                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

                //INSERTS USERNAME AND PASSWORD INTO TABLE
                var sql = "INSERT INTO userInfo (name, password, dateCreated) VALUES ('" + username + "', '" + password + "', '" + date + "')";
                con.query(sql, function(err, result) {
                    if (err) throw err;
                    console.log("1 record insserted");
                });
            }
            //If the user DOES exist on the database
            else {
                
            }

            console.log('Data received from ' + name + ':');
            console.log(rows);
        });
    });
    res.render('index', {
        title: 'Express'
    });
});



module.exports = router;