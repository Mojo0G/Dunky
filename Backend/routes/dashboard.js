const express = require('express');
const router =  express.Router();
const User = require('../models/user');
const addOrder = require('../controllers/customer');

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

router.route('/customer/order')
.get((req, res) => {
    
})
.post(addOrder)

module.exports = router