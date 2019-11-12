const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    // allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    // allowNull: false,
    validate: {
      isNumeric: true,
      min: 0
    }
  },
  description: {
    type: Sequelize.TEXT
    // allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081'
  },
  type: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['dog', 'cat', 'other']]
    }
  }
})

module.exports = Product
