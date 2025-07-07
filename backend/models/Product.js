const mongoose = require('mongoose')

const {Schema} = mongoose

const {variationSchema} = require('./Variation')
const {commentsSchema} = require('./Comments')
const {imagesSchema} = require('./Images')
const {detailsSchema} = require('./Details')

const productSchema = new Schema(
{
    myid: {
        type: Number,
        requiired: true
    },
    name: {
        type: String,
        required: true
    },
    sales: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    seller: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    offer: {
        type: String,
        required: false
    },
    latest: {
        type: Boolean,
        required: true,
        default: false
    },
    bestseller: {
        type: Boolean,
        required: true,
        default: false
    },
    featured: {
        type: Boolean,
        required: true,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    variations: {
        type: [variationSchema],
    },
    comments: {
        type: [commentsSchema]
    },
    images: {
        type: [imagesSchema]
    },
    details: {
        type: [detailsSchema]
    },
    }, {
        timestamps: true
      }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product