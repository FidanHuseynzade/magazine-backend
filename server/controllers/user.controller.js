const UserModel = require("../models/user.model")
const bcrypt = require("bcrypt")

const user_controller = {
    getAll: async (req, res) => {
        const { name } = req.query;
        const users = await UserModel.find({});
        if (name) {
            const filteredUsers = users.filter((x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim()));
            res.send(filteredUsers);
        }
        else {
            res.send(users);
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params;
        const users = await UserModel.findById(id);
        if (users) {
            res.status(200).send(users)
        }
        else {
            res.send({ message: 'not found' })
        }
    },

    register: async (req, res) => {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.send(newUser);
    },

    delete: async (req, res) => {
        const { id } = req.params;
        await UserModel.findByIdAndDelete(id);
        const users = await UserModel.find({});
        res.send(users);
    },

    edit: async (req, res) => {
        const { id } = req.params;
        await UserModel.findByIdAndUpdate(id, req.body);
        const updatedUser = await UserModel.findById(id);
        res.send(updatedUser);
    }
}

module.exports = user_controller