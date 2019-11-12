const router = require('express').Router()
const Orders = require('../db/models/orders')
const Product = require('../db/models/product')
const OrderItems = require('../db/models/orderItems')

router.get('/', async (req, res, next) => {
  try {
    const cart = await Orders.findOne({
      include: [
        {
          model: Product,
          through: 'orderItems',
          attributes: ['id', 'name', 'price', 'imageUrl']
        }
      ],
      where: {
        status: 'In cart',
        userId: req.user.id
      },
      attributes: ['id', 'userId']
    })
    if (!cart) {
      let error = new Error('Your cart is empty.')
      next(error)
    } else {
      res.json(cart)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const itemToUpdate = req.body

    const item = await OrderItems.findOne({
      where: {
        productId: itemToUpdate.productId,
        orderId: itemToUpdate.orderId
      }
    })
    const updatedItem = await item.update({quantity: itemToUpdate.quantity})
    res.json(updatedItem)
  } catch (error) {
    next(error)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    const itemToDelete = req.body
    await OrderItems.destroy({
      where: {
        productId: itemToDelete.productId,
        orderId: itemToDelete.orderId
      }
    })
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

// router.use('*', require('./guest-checkout'))

module.exports = router
