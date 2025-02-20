const express = require('express');
const router =  express.Router();
const loginUser = require('../controllers/login');

router.route('/')
.get((req, res) => {
    res.send("Welcome to login page")
})
.post(loginUser);

module.exports = router;