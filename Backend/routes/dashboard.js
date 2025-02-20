const express = require('express');
const router =  express.Router();
const updateStatus = require('../controllers/seller')

router.route('/')
.get((req, res) => {
    res.send('Welcome')
})

router.route('/orders')
.get((req, res) => {
    res.send('Order Details')
})
.post(updateStatus)

module.exports = router