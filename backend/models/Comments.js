const mongoose = require('mongoose')

const {Schema} = mongoose

const {imagesSchema} = require('./Images')

const commentsSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
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
    date: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    images: [
        {
            src: {
                type: String,
                required: false
            },
            order: {
                type: Number,
                required: false
            }
        }
    ],
}, {
    timestamps: true
  })

const Comment = mongoose.model('Comment', commentsSchema)

module.exports = Comment