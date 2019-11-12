const router = require('express').Router()
const Orders = require('../db/models/orders')
const Product = require('../db/models/product')
const OrderItems = require('../db/models/orderItems')

router.get('/', async (req, res, next) => {
  //   const userId = 2; // figure out how to access userId
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

router.post('/', async (req, res, next) => {
  try {
    const itemToAdd = req.body

    const cart = await Orders.findOrCreate({
      where: {
        status: 'In cart',
        userId: req.user.id
      }
    })

    console.log('ITEMTOADD: ', itemToAdd)

    const addNewItem = {
      quantity: Number(itemToAdd[0].quantity),
      productId: Number(itemToAdd[0].productId),
      orderId: Number(cart[0].id)
    }

    const currentCartItem = await OrderItems.findOne({
      where: {
        productId: itemToAdd[0].productId,
        orderId: cart[0].id
      }
    })

    console.log('current cart item: ', currentCartItem.quantity)
    if (currentCartItem) {
      let updatedQuantity = currentCartItem.quantity + 1
      currentCartItem.update({
        quantity: updatedQuantity
      })
    }
    // } else {
    //     // console.log(addNewItem)
    //     // OrderItems.findOrCreate({
    //     //     where: {
    //     //         quantity: 1,
    //     //         productId: addNewItem.productId,
    //     //         orderId: addNewItem.orderId
    //     //     }
    //     // })
    // }

    console.log('updated current cart item: ', currentCartItem.quantity)

    res.json(currentCartItem)
    // res.json(newOrderItem)
    // res.send('hi')
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
    if (!item) {
      let error = new Error("We couldn't find this item in your cart.")
      next(error)
    }
    const updatedItem = await item.update(itemToUpdate.quantity)
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
        productId: itemToDelete.data.productId,
        orderId: itemToDelete.data.orderId
      }
    })
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

// router.use('*', require('./guest-checkout'))

module.exports = router
