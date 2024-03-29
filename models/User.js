const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model('user', new mongoose.Schema({
    name: {
        type: String, 
        minlength: 3, 
        maxlength: 30, 
        required: true
    }, 
    phone: {
        type: String,
        minlength: 7,
        maxlength: 10,
        required: true
    }, 
    address: {
        type: String,
        minlength: 6,
        maxlength: 50,
        required: false
    }
}));

const validate = (user) => {
    const schema = {
        name: Joi.string().required().min(3).max(30), 
        phone: Joi.string().required().min(7).max(15),
        address: Joi.string().required().min(6).max(50)
    }
    return Joi.validate(user, schema);
};

module.exports = {
    User, 
    validate
}