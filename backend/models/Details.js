const mongoose = require('mongoose')

const {Schema} = mongoose

const detailsSchema = new Schema({
    deatil: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    spec: {
        type: String,
        required: true
    }
})

const Details = mongoose.model('Details', detailsSchema)

module.exports = Details