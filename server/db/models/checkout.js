const Sequelize = require('sequelize')
const db = require('../db')

const Checkout = db.define('checkout', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true
    }
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isIn: [['In cart', 'Ordered', 'Pending', 'Fulfilled']]
    }
  },
  orderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true
    }
  }
})

module.exports = Checkout
