/*jshint esversion: 8 */
const path = require("path");
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./startup/db')

// load env vars
dotenv.config({path: './config/config.env'});

// database
connectDB();

const app = express();
require('./startup/routes')(app);
//Enable cors
app.use(cors());
//static file
app.use(express.static(path.join(__dirname, 'public')));

//Body parser to send data to api
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
));