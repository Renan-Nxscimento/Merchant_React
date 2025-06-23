const mongoose = require('mongoose')

const {Schema} = mongoose

const categorieSchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})

const Category = mongoose.model('Category', categorieSchema)

module.exports = Category