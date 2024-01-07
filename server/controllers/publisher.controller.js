const PublisherModel = require("../models/publisher.model")
const bcrypt = require("bcrypt")

const publisher_controller = {
    getAll: async (req, res) => {
        const { name } = req.query;
        const publishers = await PublisherModel.find({});
        if (name) {
            const filteredPublishers = publishers.filter((x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim()));
            res.send(filteredPublishers);
        }
        else {
            res.send(publishers);
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params;
        const publishers = await PublisherModel.findById(id);
        if (publishers) {
            res.status(200).send(publishers)
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
        const newPublisher = new PublisherModel(req.body);
        await newPublisher.save();
        res.send(newPublisher);
    },
    delete: async (req, res) => {
        const { id } = req.params;
        await PublisherModel.findByIdAndDelete(id);
        const publishers = await PublisherModel.find({});
        res.send(publishers);
    },
    edit: async (req, res) => {
        const { id } = req.params;
        await PublisherModel.findByIdAndUpdate(id, req.body);
        const updatedPublisher = await PublisherModel.findById(id);
        res.send(updatedPublisher);
    }
}

module.exports = publisher_controller