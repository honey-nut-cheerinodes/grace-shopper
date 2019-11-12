const Sequelize = require('sequelize')
const db = require('../db')

const OrderItems = db.define('orderItems', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: true,
      isNumeric: true
    }
  }
})

module.exports = OrderItems
