const express = require('express');
const router =  express.Router();
const addUser = require('../controllers/signup');

router.route('/customer')
.get((req, res) => {
    return res.send("Welcome Customer signup")
})
.post(addUser);

router.route('/shopkeeper')
.get((req, res) => {
    return res.send("Welcome Shopkeeper signup")
})
.post(addUser);

module.exports = router;