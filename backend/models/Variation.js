const mongoose = require('mongoose')

const {Schema} = mongoose

const variationSchema = new Schema({
    variation: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
        min: 1,
        max: 4
    }
})

const Variation = mongoose.model('Variation', variationSchema)

module.exports = Variation