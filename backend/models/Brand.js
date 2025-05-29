const mongoose = require('mongoose')

const {Schema} = mongoose

const brandSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    }
})

const Brand = mongoose.model('Brand', brandSchema)

module.exports = Brand