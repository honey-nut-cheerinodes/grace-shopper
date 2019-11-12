//For db/models/index.js
const User = require('./user')
const Product = require('./product')
const Orders = require('./orders')
const OrderItems = require('./orderItems')

User.hasMany(Orders)
Orders.belongsTo(User)
Product.belongsToMany(Orders, {through: 'orderItems', unique: false})
Orders.belongsToMany(Product, {through: 'orderItems', unique: false})
Orders.hasMany(OrderItems)

module.exports = {
  User,
  Product,
  Orders,
  OrderItems
}
