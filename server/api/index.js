const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/cart', require('./orders'))
router.use('/products', require('./products'))
router.use('/profile/order-history', require('./order-history'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
