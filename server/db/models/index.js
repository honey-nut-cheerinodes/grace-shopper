//For db/models/index.js
const User = require('./user')
const Product = require('./product')
const Orders = require('./orders')
const OrderItems = require('./orderItems')

// UPDATED ASSOCIATIONS
User.hasMany(Orders)
Orders.belongsTo(User)
Product.belongsToMany(Orders, {through: 'orderItems'})
Orders.belongsToMany(Product, {through: 'orderItems'})
// User.hasMany(OrderItems) // where: {userId: <sessions userId>}???
// need it to filter cart first by userId and second by status?
// if so, this will break my component
// can we access userId via passport?
Orders.hasMany(OrderItems)

// OLD ASSOCIATIONS
// User.hasMany(Checkout)
// Checkout.belongsTo(User)
// Checkout.belongsToMany(Product, {through: 'orders'})
// Product.hasMany(Checkout)

module.exports = {
  User,
  Product,
  Orders,
  OrderItems
}
