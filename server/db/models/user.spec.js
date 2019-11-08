/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')
var should = require('chai').should()

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  it('should have property email with value cody@email.com', function() {
    let User = {email: 'cody@email.com'}

    User.should.have.property('email').equal('cody@email.com')
  })

  it('checks for null', function() {
    let User = null
    should.not.exist(User)
  })

  it('requires `email`', async () => {
    const user = User.build()

    try {
      await user.validate()
      throw Error(
        'validation was successful but should have failed without `email`'
      )
    } catch (err) {
      expect(err.message).to.contain('name cannot be null')
    }
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
