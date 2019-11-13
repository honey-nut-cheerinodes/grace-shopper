const router = require('express').Router()
module.exports = router

// Read a guest's cart
router.get('/', (req, res, next) => {
  const cart = req.session.cart
  if (!cart) {
    let error = new Error('No cart items found')
    next(error)
  } else {
    res.json(req.session.cart)
  }
})

// Create a new cart, or add items to cart
//post for guests. Not for users. This may not be necessary though, but separated out for now
router.post('/', (req, res) => {
  let items = []
  const newItem = {
    productId: req.body[0].productId,
    item: req.body[0].item,
    imageUrl: req.body[0].imageUrl,
    price: req.body[0].price,
    quantity: req.body[0].quantity
  }

  const cart = req.session.cart
  if (!cart || cart.length === 0) {
    items.push(newItem)

    req.session.cart = [...items]
  } else {
    // check to see if item already exists in cart
    let foundDuplicate = false
    cart.forEach(product => {
      if (product.productId === newItem.productId) {
        product.quantity++
        foundDuplicate = true
      }
    })

    if (!foundDuplicate) items.push(newItem)
    req.session.cart = [...cart, ...items]
  }
  req.session.save(err => {
    if (err) {
      console.error(err)
    }
    res.json(items)
  })
})

// Delete an item from the guest's cart
router.delete('/', (req, res, next) => {
  const cart = req.session.cart
  const itemID = req.body
  if (!cart) {
    let error = new Error('No cart items found')
    next(error)
  } else {
    let cartItems = req.session.cart
    const items = cartItems.filter(function(item) {
      if (item.productId !== itemID.id) {
        return item
      }
    })
    req.session.cart = [...items]

    req.session.save(err => {
      if (err) {
        console.error(err)
      }
      // Sending the new cart sans item, but this can be changed to send the ID of the
      // deleted item, if we want
      res.json(req.session.cart)
    })
  }
})

// Update items on a cart
router.put('/', (req, res, next) => {
  const itemToUpdate = req.body
  const cart = req.session.cart
  if (!cart) {
    let error = new Error('No cart items found')
    next(error)
  } else {
    const items = cart.map(function(item) {
      if (item.productId === itemToUpdate.id) {
        item.quantity = itemToUpdate.quantity
        return item
      }
      return item
    })

    req.session.cart = [...items]
    req.session.save(err => {
      if (err) {
        console.error(err)
      }
      // Sending the new cart sans item, but this can be changed to send the ID of the
      // deleted item, if we want
      res.json(req.session.cart)
    })
  }
})
