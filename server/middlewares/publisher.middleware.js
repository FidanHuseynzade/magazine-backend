const PublisherModel = require("../models/publisher.model");
const PublisherValidation = require("../validations/publisher.validation")

const PublisherMiddleware = async (req, res, next) => {
    const{username, email} = req.body;

    const duplicateEmail = await PublisherModel.find({email});
    const duplicateUsername = await PublisherModel.find({username});
    const { error } = PublisherValidation.validate(req.body)
    if (duplicateEmail.length>0) {
        res.send({message: 'email already exist'})
        return;
    }
    if (duplicateUsername.length>0) {
        res.send({message: 'username already exist'})
        return;
    }

    if (!error && duplicateUsername.length==0 && duplicateEmail.length==0) {
        next();
    }
    else{
        const{details} = error;
        const message = details[0].message;
        res.send({message});
    }
}


module.exports = PublisherMiddleware