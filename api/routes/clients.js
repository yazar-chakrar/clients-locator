const {Client, validateClient} = require('../models/client');
const express = require('express');
const router = express.Router();

// @desc Get all clients locations
// @route api/clients
// @access Public
router.get('/', async (req, res) => {
    const clients = await Client.find();

    return res.status(200).json({
        succes: true,
        count: clients.length,
        data: clients
    })
})

// @desc Create client location
// @route Post api/clients
// @access Public
router.post('/', async (req, res) => {
    //const { error } = validateClient(req.body); 
    //if (error) return res.status(400).send(error.details[0].message);

    client = await Client.create(req.body);
    res.send({
        status: true,
        data: client
    });
})

module.exports = router;