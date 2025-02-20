const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  image: {
    type: Buffer, // Store the image as binary data
    required: true,
  },
  comment: {
    type: String, // e.g., 'image/png' or 'image/jpeg'
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
