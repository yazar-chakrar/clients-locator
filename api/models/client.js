const mongoose = require('mongoose');
const Joi = require('joi');
const geocoder = require('../utils/geocoder')

const clientSchema = new mongoose.Schema({
    name: String,
    adress: {
        type: String,
        //required: true
    },
    location: {
        type: {
          type: String,
          enum: ['Point'], 
          //required: true
        },
        coordinates: {
          type: [Number],
          index: '2dsphere',
          //required: true
        },
        formattedAddress: String
    },
    
});
//Geocode & create location
clientSchema.pre('save', async function(next){
    const loc = await geocoder.geocode(this.adress);
    console.log(loc)
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    }

    this.adress = undefined
});
const Client = mongoose.model('clients',clientSchema);

function validateClient(client){
    const schema = Joi.object({
        name: Joi.string().required(),
        adress: Joi.string().required()
    })

    return schema.validate(client)
}



exports.Client = Client;
exports.validateClient = validateClient;