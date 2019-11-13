const router = require('express').Router()
const Orders = require('../db/models/orders')
// const OrderItems = require('../db/models/orderItems')
const Product = require('../db/models/product')

router.get('/', async (req, res, next) => {
  try {
    const orders = await Orders.findAll({
      include: [
        {
          model: Product,
          through: 'orderItems',
          attributes: ['name', 'price', 'imageUrl']
        }
      ],
      where: {
        status: ['In process', 'Shipped', 'Fulfilled'],
        userId: req.user.id
      }
    })
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

module.exports = router
