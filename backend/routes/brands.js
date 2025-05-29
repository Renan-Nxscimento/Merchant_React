const router = require('express').Router()

const brandController = require('../controllers/brandController')

router.route('/brands').get((req,res) => brandController.getAll(req, res))

router.route('/brands/:id').get((req,res) => brandController.get(req, res))

module.exports = router