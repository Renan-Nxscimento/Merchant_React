const mongoose = require('mongoose')

const {Schema} = mongoose

const imagesSchema = new Schema({
    src: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
})

const Images = mongoose.model('Images', imagesSchema)

module.exports = {
    Images,
    imagesSchema
}