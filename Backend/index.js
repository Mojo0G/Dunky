const express = require('express');
const app = express();
const connectMongo = require('./connection.js');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const auth = require('./middleware/auth.js');
const home = require('./routes/home.js');
const signup = require('./routes/signup.js');
const login = require('./routes/login.js');
const dashboard = require('./routes/dashboard.js');

dotenv.config();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connectMongo();

app.use('/', home);
app.use('/signup', signup);
app.use('/login', login);
app.use('/dashboard', auth, dashboard);

app.listen(8000, (err) => {
  if (err) {
    console.log('Server error:', err);
  } else {
    console.log('Successfully Connected to the Server');
  }
});