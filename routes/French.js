const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const name = "resources";
const {
    dbPassword,
} = require("../info.json");
const topic = "French";
var URLS = [];

 
//import { loggedinUSERNAME } from './login.js';


router.get('/', function(req, res, next) {
    res.render('French', { 
        title: 'Express', url: URLS });
  });


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
    console.log("Connected!");
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
        var duplicatedURL = false;
        for (var i =0; i < numberofUSERS; i++) {
            URLS.push(rows[i]["URL"]);
        }
        
    });
    
});

function theURLS () {
    return URLS;
}

module.exports = theURLS;

module.exports = router;