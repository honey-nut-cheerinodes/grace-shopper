//For db/models/index.js
const User = require('./user')
const Product = require('./product')
const Checkout = require('./checkout')

//Associations
User.hasMany(Checkout)
Checkout.belongsTo(User)
Checkout.belongsToMany(Product, {through: 'orders'})
Product.hasMany(Checkout)

module.exports = {
  User,
  Product,
  Checkout
}
