const router = require('express').Router()

//Products router
const productsRouter = require('./products')

router.use('/', productsRouter)

module.exports = router