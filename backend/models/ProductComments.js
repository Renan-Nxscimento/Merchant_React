const mongoose = require('mongoose')

const {Schema} = mongoose

const prodCommentsSchema = new Schema({
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
        required: true
    },
})

const ProdComments = mongoose.model('ProdComments', prodCommentsSchema)

module.exports = ProdComments