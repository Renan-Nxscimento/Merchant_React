const BrandModel = require('../models/Brand')

const brandController = {

    getAll: async (req, res) => {
            try {
                const users = await BrandModel.find()
    
                res.json(users)
            } catch (error) {
                console.log(error)
            }
        },

    get: async (req, res) => {
        try {
            const id = req.params.id
            const user = await BrandModel.findById(id)

            if(!user) {
                res.status(404).json({msg: `Couldn't locate the brand.`})
                return
            }

            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = brandController