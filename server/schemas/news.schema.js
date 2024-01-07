const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: String,
    createdAt: Date,
    linkURL: String,
    thumbnailImg: String,
    newsBody: String
})

module.exports = NewsSchema;