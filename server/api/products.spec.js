/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    const productName = 'Sweatshirt'

    beforeEach(() => {
      return Product.create({
        name: 'Sweatshirt',
        price: 399,
        description:
          'This Supreme hoodie is the ultimate cozy experience for your cat.  The luxurious sherpa lining takes the coziness to the next level by decking our your pooch in the softest mix of cozy sherpa and marled fleece.',
        imageUrl:
          'https://peopledotcom.files.wordpress.com/2018/04/zappa-the-cat-3.jpg',
        type: 'cat'
      })
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(productName)
    })
  }) // end describe('/api/products')
}) // end describe('Product routes')
