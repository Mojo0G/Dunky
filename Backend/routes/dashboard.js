const express = require('express');
const router =  express.Router();
const updateStatus = require('../controllers/seller')
const User = require('../models/user');

router.route('/')
.get(async (req, res) => {
    const id = req.user._id;
    const user = await User.findOne({_id: id})
    if (user.role === 'Customer') {
        return res.redirect('/dashboard/customer')
    }
    else{
        return res.redirect('/dashboard/seller')
    }
})

router.route('/seller')
.get((req, res) => {
    return res.json('Welcome to the sellers dashboard');
})

router.route('/customer')
.get((req, res) => {
    
    return res.json('Welcome to the customer dashboard');
})

router.route('/orders')
.get((req, res) => {
    
})
.post(updateStatus)

module.exports = router