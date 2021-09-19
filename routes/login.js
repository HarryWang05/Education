const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const name = "loginInfo";
let cookieParser = require('cookie-parser');
let app = express()
app.use(cookieParser());
var loggedinUSERNAME;


const {
    dbPassword,
} = require("../info.json");
//const { crypto_secretstream_xchacha20poly1305_keygen } = require('libsodium-wrappers');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', {
        title: 'Express'
    });
});

router.post('/', function(req, res) {
    let what_to_render = true;
    var where = false;
    let username = req.body["username"];
    let password = req.body["password"];
    console.log(username);
    console.log(password);


    //Connects to MYSQL
    var con = mysql.createConnection({
        host: "localhost",
        user: "fengzhang",
        password: dbPassword,
        database: name
    });

    con.query('SELECT * FROM userInfo', (err, rows) => {
        if (err) throw err;
        numberofUSERS = rows.length;
        var duplicatedUser = false;
        var index = 0;

        //If username exists
        for (var i = 0; i < numberofUSERS; i++) {
            if (rows[i]["name"] == username) {
                duplicatedUser = true;
                index = i;
                loggedinUSERNAME = username;
                
            }
        }
        //If user doesn't exist on the database 
        if (duplicatedUser == false) {
            //Show on the screen "This user doesnt exist"

        } else {
            if (password == rows[index]["password"]) {
                where = true;
                //you have logged in
                //res.cookie("login", username);



            } else {
                console.log("WRONG PASSWORD");
                //wrong password
            }

        }
        if (what_to_render == true) {
            console.log(where);
            if (where) {
                res.cookie("login", username);
            }
            res.render('index', {
                title: 'Express'
            });
        } else {
            console.log(where);
            if (where) {
                res.cookie("login", username);
            }
            res.render('index', {
                title: 'Express'
            });
        }

    });
});


module.exports = router;