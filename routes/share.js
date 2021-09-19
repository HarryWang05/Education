const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const name = "resources";
const {
    dbPassword,
} = require("../info.json");
const {loggedinUSERNAME} = require('./login.js');


router.get('/', function(req, res, next) {
    res.render('share', {
        title: 'Express'
    });
});


router.post('/', function(req, res) {
    let resource = req.body["resource"];
    let topic = req.body["topic"];
    console.log(resource);
    console.log(topic);
    console.log("resource");


    var postersUsername = "Joe"

    //CONNECTS TO DATABASE
    var con = mysql.createConnection({
        host: "localhost",
        user: "fengzhang",
        password: dbPassword,
        database: name
    });

    //CREATES THE DATABASE
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!")
        con.query("CREATE DATABASE IF NOT EXISTS " + name, function(err, result) {
            if (err) throw err;
            console.log("Database created");
        });

        
        
        //CREATES TABLE IF IT DOESNT EXIST
        var sql = "CREATE TABLE IF NOT EXISTS " + topic + " (URL VARCHAR(255), postersUsername VARCHAR(255), datePosted VARCHAR(255))";
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("Table " + topic + " created");
        });

        //PRINTS OUT THE DATA IN TABLE
        con.query('SELECT * FROM ' + topic, (err, rows) => {
            if (err) throw err;
            numberofUSERS = rows.length;
            console.log(numberofUSERS);
            var duplicatedURL = false;

            /*
            //If URL already exists
            for (var i = 0; i < numberofUSERS; i++) {
                if (rows[i]["URL"] == username){
                    duplicatedURL = true;
                }
            }
            */

            //If URL doesn't exist on the database 
            if (duplicatedURL == false)
                //GETS THE DATE
                var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

            //INSERTS URL/USER/PASSWORD INTO TABLE
            var sql = "INSERT INTO " + topic + " (URL, postersUsername, datePosted) VALUES ('" + resource + "', '" + loggedinUSERNAME + "', '" + date + "')";
            con.query(sql, function(err, result) {
                if (err) throw err;
                console.log("1 URL inserted");
                console.log(loggedinUSERNAME)
            });
            console.log('Data received from ' + topic + ':');
            console.log(rows);
        });

        
    });

    res.render('share', {
        title: 'Express'
    });

});


module.exports = router;