const UserModel = require('../models/User')

const userController = {
    create: async(req, res) => {
        try {

            const user = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                image: req.body.image,
                favorite_products: req.body.favorite_products,
                cart: req.body.cart
            }

            const response = await UserModel.create(user)

            res.status(201).json({response, msg: `User created.`})
            
            
        } catch (error) {
            console.log(error)
        }
    },

    getAll: async (req, res) => {
            try {
                const users = await UserModel.find()
    
                res.json(users)
            } catch (error) {
                console.log(error)
            }
        },

    get: async (req, res) => {
        try {
            const id = req.params.id
            const user = await UserModel.findById(id)

            if(!user) {
                res.status(404).json({msg: `Couldn't locate the user.`})
                return
            }

            res.json(user)
        } catch (error) {
            console.log(error)
        }
    },
    
    update: async (req, res) => {
        try {
            const id = req.params.id

            const user = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                image: req.body.image,
                favorite_products: req.body.favorite_products,
                cart: req.body.cart
            }

            const updatedUser = await UserModel.findByIdAndUpdate(id, user)

            if(!updatedUser) {
                res.status(404).json({msg: `Couldn't locate the user.`})
                return
            }

            res.status(200).json({user, msg: 'User updated.'})

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = userController