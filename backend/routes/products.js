const router = require('express').Router()

const productController = require('../controllers/productController')

router.route('/products').post((req, res) => productController.create(req, res))

router.route('/products').get((req,res) => productController.getAll(req, res))

router.route('/products/:id').get((req,res) => productController.get(req, res))

module.exports = router