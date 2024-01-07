const Joi = require('joi');

const UserValidation = Joi.object({
    fullName: Joi.string().min(3).max(50).required(),
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    isAdmin: Joi.boolean()
});

module.exports = UserValidation;