const mongoose = require('mongoose')

const {Schema} = mongoose

const imagesSchema = new Schema({
    src: {
        type: String,
        required: false
    },
    order: {
        type: Number,
        required: false
    }
})

const Images = mongoose.model('Images', imagesSchema)

module.exports = {
    Images,
    imagesSchema
}