const mongoose = require('mongoose')

const {Schema} = mongoose

const cartSchema = new Schema({
    productname: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    variation: {
        type: String,
        required: true
    }
})

cartSchema.index({productname: 1, variation:1}, {unique: true})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart