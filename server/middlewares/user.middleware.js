const UserModel = require("../models/user.model");
const UserValidation = require("../validations/user.validation")

const UserMiddleware = async (req, res, next) => {
    const{username, email} = req.body;

    const duplicateEmail = await UserModel.find({email});
    const duplicateUsername = await UserModel.find({username});
    const { error } = UserValidation.validate(req.body)
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

module.exports = UserMiddleware