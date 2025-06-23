const router = require('express').Router()

//Products router
const productsRouter = require('./products')

router.use('/', productsRouter)

//Users router
const usersRouter = require('./users')

router.use('/', usersRouter)

//Brands router
const brandsRouter = require('./brands')

router.use('/', brandsRouter)

//Categories router
const categoriesRouter = require('./categories')

router.use('/', categoriesRouter)

module.exports = router