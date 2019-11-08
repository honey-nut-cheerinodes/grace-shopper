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
  /* PLEASE READ ***********************
    right now, the expected input type is an array of objects, for example:
     [
      {
          "productId": "6",
          "item": "dress",
          "quantity": "1"
      },
      {
          "productId": "7",
          "item": "jacket",
          "quantity": "1"
      }
    ]
  ****************************** */
  const items = req.body
  const cart = req.session.cart
  if (!cart) {
    req.session.cart = [...items]
  } else {
    req.session.cart = [...cart, ...items]
  }
  req.session.save(err => {
    if (err) {
      console.error(err)
    }
    res.json(req.session.cart)
  })

  // We probably want to redirect afterwards
  // res.redirect('/')
})

// Delete an item from the guest's cart
router.delete('/', (req, res, next) => {
  /* EXPECTED INPUT ***********
    {
      "productId": "6"
    }
  ************************** */
  const cart = req.session.cart
  const itemID = req.body
  if (!cart) {
    let error = new Error('No cart items found')
    next(error)
  } else {
    let cartItems = req.session.cart
    const items = cartItems.filter(function(item) {
      if (item.productId !== itemID.productId) {
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
  /* EXPECTED INPUT ***********************
    right now, the expected input type is an array of objects, for example:
      {
          "productId": "6",
          "quantity": "1"
      }
  ****************************** */
  const itemToUpdate = req.body
  const cart = req.session.cart
  if (!cart) {
    let error = new Error('No cart items found')
    next(error)
  } else {
    const items = cart.map(function(item) {
      if (item.productId === itemToUpdate.productId) {
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
