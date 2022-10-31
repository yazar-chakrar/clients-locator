/*jshint esversion: 8 */
const path = require("path");
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// load env vars
dotenv.config({path: './config/config.env'});

const app = express();

require('./startup/routes')(app);

//Body parser to send data to api
const PORT = process.env.PORT || 3000;

//Enable cors
app.use(cors());

app.listen(PORT, () => 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
));