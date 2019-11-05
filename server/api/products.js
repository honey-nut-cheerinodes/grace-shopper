const router = require('express').Router()
const Product = require('../db/models/product')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)
    if (product) {
      res.send(product)
    } else {
      res.status(404).send('Product not found')
    }
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      attributes: ['name', 'price', 'description', 'imageUrl', 'type']
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})
