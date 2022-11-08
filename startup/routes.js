/*jshint esversion: 8 */
const express = require('express');

// Routes
const clients = require('../api/routes/clients');
const locations = require('../api/routes/locations');

module.exports = function(app) {
    app.use(express.json());

    app.use('/api/v1/locations', locations);
    app.use('/api/v1/clients', clients);
};