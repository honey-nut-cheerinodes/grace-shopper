const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'In cart',
    validate: {
      notEmpty: true,
      isIn: [['In cart', 'In process', 'Shipped', 'Fulfilled']]
    }
  }
})

module.exports = Orders
