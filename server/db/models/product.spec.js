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

  const product = {
    name: 'sweatshirt',
    price: '399',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://peopledotcom.files.wordpress.com/2018/04/zappa-the-cat-3.jpg',
    type: 'cat'
  }

  it('should have property `name`', function() {
    product.should.have.property('name').equal('sweatshirt')
  })

  it('should have property `price`', function() {
    product.should.have.property('price').equal('399')
  })

  it('requires a description and imageUrl', async () => {
    product.description = null
    let result, error
    try {
      result = await product.validate()
    } catch (err) {
      error = err
    }

    if (result) throw Error('validation should fail when content is null')

    expect(error).to.be.an.instanceOf(Error)
  })
})
