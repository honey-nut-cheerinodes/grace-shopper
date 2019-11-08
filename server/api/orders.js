const router = require('express').Router()
const Orders = require('../db/models/orders')
const Product = require('../db/models/product')

router.get('/', async (req, res, next) => {
  try {
    // const cart = await Orders.findAll({where: {status: 'In cart'}})
    const cart = await Orders.findAll({
      include: [{model: Product, through: 'orders'}],
      where: {status: 'In cart'}
    })
    // i'm not filtering properly thru each user's current order....this is just pulling up ALL orders that have status in cart regardless of that order's user.
    // console.log('cart: ', cart)
    res.send(cart)
  } catch (error) {
    next(error)
  }
})

// passport has a method that returns the currently logged-in user; there won't be a userId associated with a guest.....

// router.put('/', async (req, res, next) => {

// })

// router.delete('/', async (req, res, next) => {

// })

module.exports = router

// {include: [{model: Product}], where: {status: 'In cart'}})
