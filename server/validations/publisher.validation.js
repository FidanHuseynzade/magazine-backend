const Joi = require('joi');

const PublisherValidation = Joi.object({
    fullName: Joi.string().min(3).max(50).required(),
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    profileImage: Joi.string().optional().allow(''),
    backgroundImage: Joi.string().optional().allow(''),
});

module.exports = PublisherValidation;