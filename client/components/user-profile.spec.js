/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserProfile} from './user-profile'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('<UserProfile /> component', () => {
  let userProfile

  beforeEach('Create component', () => {
    userProfile = shallow(<UserProfile />)
  })

  it('has an `email` field on its state', () => {
    expect(userProfile.state().email.to.exist)
  })
})
