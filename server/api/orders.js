const router = require('express').Router()
const Orders = require('../db/models/orders')
const Product = require('../db/models/product')
const OrderItems = require('../db/models/orderItems')

const isLoggedIn = (req, res, next) => {
  //   try {
  //     if (req.user) next()
  //     // res.status(403).send('We coudn\'t find your account. Try logging in again.')
  //   } catch (error) {
  //     next(error)
  //   }
  next()
}

router.get('/', isLoggedIn, async (req, res, next) => {
  console.log('req.session: ', req.session)
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

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const itemToAdd = req.body
    const cart = await Orders.findOne({
      where: {
        status: 'In cart',
        userId: req.user.id
      }
    })
    if (!cart) {
      const newCart = await Orders.create({
        where: {
          status: 'In cart',
          userId: req.user.id
        }
      })
      await newCart.save()
      const newCartItem = await OrderItems.create(itemToAdd)
      newCartItem.orderId = newCart.id
      await newCartItem.save(error => {
        if (error) {
          console.error(error)
        }
        res.json(newCartItem)
      })
    }
    const currentCartItem = await OrderItems.create(itemToAdd)
    currentCartItem.orderId = cart.id
    await currentCartItem.save(error => {
      if (error) {
        console.error(error)
      }
      res.json(currentCartItem)
    })
  } catch (error) {
    next(error)
  }
})

router.put('/', isLoggedIn, async (req, res, next) => {
  try {
    const itemToUpdate = req.body
    const item = await OrderItems.findOne({
      where: {
        productId: itemToUpdate.id
      },
      include: [
        {
          model: Orders,
          where: {
            status: 'In cart',
            userId: req.user.id
          }
        }
      ]
    })
    if (!item) {
      let error = new Error("We couldn't find this item in your cart.")
      next(error)
    }
    const updatedItem = await item.update(itemToUpdate)
    await updatedItem.save(error => {
      if (error) {
        console.error(error)
      }
      res.json(updatedItem)
    })
  } catch (error) {
    next(error)
  }
})

// only pass back quantity to the frontend for security purposes

router.delete('/', isLoggedIn, async (req, res, next) => {
  try {
    const itemToDelete = req.body
    const item = await OrderItems.findOne({
      include: [
        {
          model: Orders,
          where: {
            status: 'In cart',
            userId: req.user.id
          },
          attributes: ['status', 'userId']
        }
      ],
      where: {
        productId: itemToDelete.id
      }
    })
    if (!item) {
      let error = new Error("We couldn't find this item in your cart.")
      next(error)
    }
    await item.destroy()
  } catch (error) {
    next(error)
  }
})

router.use('*', require('./guest-checkout'))

module.exports = router
