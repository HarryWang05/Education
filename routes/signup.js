const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Express' });
});

router.post('/', function(req, res) {
    let username = req.body["username"];
    let password = req.body["password"];
    console.log(username);
    console.log(password);
    console.log("signup");
    res.render('index', { title: 'Express' });
});

module.exports = router;