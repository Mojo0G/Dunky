const Order = require('../models/order')

const updateStatus = async (req, res) => {
    // controllers/orderController.js
  const status = req.status;
  try {

    const orderId = req.orderId;
    const userId = req.user._id; 

    const order = await Order.findOne({
      _id: orderId,
      shopkeeper: userId,
    }).populate('customer shopkeeper');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Update the order status
    order.status = status;
    await order.save();

    res.status(200).json({ message: 'Order status updated successfully', order });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports =  updateStatus;
