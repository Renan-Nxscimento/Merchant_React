const CategorieModel = require('../models/categories')

const categoriesController = {

    getAll: async (req, res) => {
            try {
                const products = await CategorieModel.find()
    
                res.json(products)
            } catch (error) {
                console.log(error)
            }
        },

    get: async (req, res) => {
        try {
            const id = req.params.id
            const product = await CategorieModel.findById(id)

            if(!product) {
                res.status(404).json({msg: `Couldn't locate the category.`})
                return
            }

            res.json(product)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = categoriesController