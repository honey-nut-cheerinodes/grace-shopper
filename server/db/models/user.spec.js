/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')
var should = require('chai').should()

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  const user = {
    email: 'cody@email.com',
    firstName: 'Cody',
    lastName: 'ThePug',
    imageUrl:
      'https://images.ctfassets.net/oxjq45e8ilak/2TGv5KhlzHxWNVtNyseaEY/f4f2108d1340fbeb2a57cf3c2d363bf0/MicrosoftTeams-image__1_.png',
    password: 'ca69ad65f3f75025ce78afcf5aa88440e71fd29c9a93975d374716ae20909026'
  }

  it('should have property `email`', function() {
    user.should.have.property('email').equal('cody@email.com')
  })

  it('should have property `first name` and `last name`', function() {
    user.should.have.property('firstName').equal('Cody')
    user.should.have.property('lastName').equal('ThePug')
  })

  it('should have property `password`', function() {
    user.should.have
      .property('password')
      .equal('ca69ad65f3f75025ce78afcf5aa88440e71fd29c9a93975d374716ae20909026')
  })

  it('checks for null', function() {
    var user = null
    should.not.exist(user)
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
