const User = require('../models/user');

// Controller to add a new user
const addUser = async (req, res) => {
  
    const { name, email, password, address, phoneNumber} = req.body;
    
    let role = null;
    const path = req.path;
    if (path === '/customer') {
        role = 'Customer';
    }
    else{
        role = 'Shopkeeper';
    }


  try {
    if (!name || !email || !password || !address || !phoneNumber || !role) {
      return res.status(400).json({ msg: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const newUser = new User({
      name,
      email,
      password,
      address,
      phoneNumber,
      role,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ msg: 'User created successfully', user: newUser});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};


module.exports = addUser;