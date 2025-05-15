const ProductModel = require('../models/Product')

const productController = {
    create: async(req, res) => {
        try {

            const product = {
                name: req.body.name,
                rating: req.body.rating,
                reviews: req.body.reviews,
                reviews: req.body.reviews,
                sales: req.body.sales,
                category: req.body.category,
                brand: req.body.brand,
                seller: req.body.seller,
                price: req.body.price,
                offer: req.body.offer,
                latest: req.body.latest,
                bestseller: req.body.bestseller,
                featured: req.body.featured,
                description: req.body.description,
                variations: req.body.variations,
                comments: req.body.comments,
                images: req.body.images,
                details: req.body.details,
            }

            const response = await ProductModel.create(product)

            res.status(201).json({response, msg: `Copy. Product created, Boss.`})
            
            
        } catch (error) {
            console.log(error)
        }
    },

    getAll: async (req, res) => {
            try {
                const products = await ProductModel.find()
    
                res.json(products)
            } catch (error) {
                console.log(error)
            }
        },

    get: async (req, res) => {
        try {
            const id = req.params.id
            const product = await ProductModel.findById(id)

            if(!product) {
                res.status(404).json({msg: `Couldn't locate the target, Boss.`})
                return
            }

            res.json(product)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = productController