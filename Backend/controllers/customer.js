const order = require('../models/order');

const addOrder = async (req, res) => {
    const {groceryList, deliveryNote} = req.body;
    const neworder = new order({
        groceryList,
        deliveryNote
    })
    await neworder.save()

    res.status(201).json({ msg: 'Order created successfully', user: neworder});
}

module.exports = addOrder;