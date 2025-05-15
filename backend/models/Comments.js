const mongoose = require('mongoose')

const {Schema} = mongoose

const {imagesSchema} = require('./Images')

const commentsSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    variation: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    customerImage: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    images: [imagesSchema],
}, {
    timestamps: true
  })

const Comment = mongoose.model('Comment', commentsSchema)

module.exports = Comment