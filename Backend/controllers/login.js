const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Controller to handle login verification
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ msg: 'Email and password are required' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    else{
        if (user.password != password) {
            return res.status(400).json({ msg: 'Invalid password,' });
        }
    }
    console.log(user);


    const token = jwt.sign({_id : user._id}, process.env.JWT_SECRET);
    
    res.cookie('token', token)
    // If credentials are valid, send a success response
    
    res.status(200).json({ msg: 'Login successful', user: { id: user._id, name: user.name, email: user.email, role: user.role }, token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = loginUser;