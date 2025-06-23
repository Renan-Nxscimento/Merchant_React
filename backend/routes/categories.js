const router = require('express').Router()

const categoriesController = require('../controllers/categoriesController')

router.route('/categories').get((req,res) => categoriesController.getAll(req, res))

router.route('/categories/:id').get((req,res) => categoriesController.get(req, res))

module.exports = router