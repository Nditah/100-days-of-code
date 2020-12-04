const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Import routes
const postsRoute = require('./routes/posts');

// Middlewares
// app.use('/posts', () => {
//     console.log('This is a middleware running');
// })
app.use(bodyParser.json());
app.use(cors());
app.use('/posts', postsRoute);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);

// Listen
app.listen(3000);
