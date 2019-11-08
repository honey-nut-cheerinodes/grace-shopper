/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')
const {should} = require('chai').should()
// In the Boilermaker project, it offers this advice for creating test specs for models:

/*
You would write tests for [functions/lifecycle hooks], because it contains logic that you are responsible for. However, you would not test the allowNull or defaultValue for the latitude/longitude fields. You should also not test the individual min/max validation on each of those fields either - they are just simple values, and the logic for validating them belongs to Sequelize. When in doubt, a good rule of thumb is that if you had to write some logic, or do anything more than simply supply a value, you should test it.

*/

// So, I'm leaving this here for now, because we will need to add test specs once/if we add functions/lifecycle hooks

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  it('should have property `name`', function() {
    let product = {name: 'sweatshirt'}

    product.should.have.property('name').equal('sweatshirt')
  })

  it('should have property `price`', function() {
    let product = {price: '399'}

    product.should.have.property('price').equal('399')
  })

  it('checks for null', function() {
    var product = null
    should.not.exist(product)
  })
})
