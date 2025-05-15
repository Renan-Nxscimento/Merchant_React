const mongoose = require('mongoose')

const {Schema} = mongoose

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
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    reviews: {
        type: Number,
        required: true,
        min: 0
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
    variations: [
        {
            variation: {
                type: String,
                required: true
            },
            order: {
                type: Number,
                required: true
            }
        }
    ],
    comments: [
        {
            _id: {
                type: Number,
                required: true
            },
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
            date: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: false
            },
            images: [
                {
                    src: {
                        type: String,
                        required: false
                    },
                    order: {
                        type: Number,
                        required: false
                    }
                }
            ],
        },
    ],
    images: [
        {
            src: {
                type: String,
                required: true
            },
            order: {
                type: Number,
                required: true
            }
        }
    ],
    details: [
        {
            detail: {
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
        }
    ],
    }, {
        timestamps: true
      }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product