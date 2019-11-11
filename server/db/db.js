const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL, {
  // Other argument options are: new Sequelize('database', 'username', 'password', {})
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
})

module.exports = db
