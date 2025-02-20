const express = require('express');
const router =  express.Router();

router.route('/')
.get((req, res) => {
    return res.json('Home Page')
})


module.exports = router;