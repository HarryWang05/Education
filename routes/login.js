const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const name = "loginInfo";
const {
    dbPassword,
} = require("../info.json");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', {
        title: 'Express'
    });
});

router.post('/', function(req, res) {
    let username = req.body["username"];
    let password = req.body["password"];
    console.log(username);
    console.log(password);


    //ADDS THE USER TO THE DATABASE
    var con = mysql.createConnection({
        host: "localhost",
        user: "fengzhang",
        password: dbPassword,
        database: name
    });



    var duplicatedUser = false;

    //If username exists
    for (var i = 0; i < numberofUSERS; i++) {
        if (rows[i]["name"] == username) {
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
    } else {

    }

    console.log('Data received from ' + name + ':');
    console.log(rows);



    res.render('index', {
        title: 'Express'
    });



});

module.exports = router;