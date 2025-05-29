const mongoose = require('mongoose')

const {Schema} = mongoose

const storeReviewSchema = new Schema({
    rating: {
        type: Number,
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

const storeReview = mongoose.model('storeReview', storeReviewSchema)

module.exports = storeReview