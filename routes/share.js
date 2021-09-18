const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const name = "loginInfo";

router.get('/', function(req, res, next) {
    res.render('share', { title: 'Express' });
});

const {
    dbPassword,
} = require("../info.json");


router.post('/', function(req, res) {
    let resource = req.body["resource"];
    let topic = req.body["topic"];
    console.log(resource);
    console.log(topic);
    console.log("resource");
});



module.exports = router;