import React from 'react'
import {expect} from 'chai'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import store from '../../store/index'

const adapter = new Adapter()
enzyme.configure({adapter})

import SingleProduct from '../products/single-product'

describe('React components', () => {
  describe('Single Product', () => {
    let singleProductData, singleProductWrapper
    beforeEach('Create <SingleProduct /> wrapper', () => {
      singleProductData = {
        name: 'Life Jacket with Shark Fin',
        price: 555,
        description:
          'A whole new way to doggie paddle!  Full-body water flotation support for your dog.  Vest is designed with a cute shark fin that`s flexible, but solid enough to grab onto.',
        imageUrl:
          'https://ak9.picdn.net/shutterstock/videos/1037370149/thumb/1.jpg?ip=x480',
        type: 'dog'
      }
      // creates the testable React component
      singleProductWrapper = shallow(
        <SingleProduct fullProduct={singleProductData} store={store} />
      )
    })

    it('includes the product`s name as an h2', () => {
      expect(
        singleProductWrapper
          .find('h2')
          .dive()
          .text()
          .trim()
      ).to.equal('Life Jacket with Shark Fin')
    })

    it('includes the product`s price as an `h3`', () => {
      expect(
        singleProductWrapper
          .find('h3')
          .text()
          .trim()
      ).to.equal(555)
    })

    it('is not hardcoded', () => {
      const aDifferentProduct = {
        name: 'Ripped Denim Jacket',
        price: 499,
        description:
          'Oversized denim jacket.  Vintage effect at collar Buttoned flap pockets on chest.  Piped pockets at front.',
        imageUrl:
          'https://cdn.shopify.com/s/files/1/0470/2117/products/squarish_2_2048x.jpg?v=1566880912',
        type: 'dog'
      }
      // we make a new component with this different data, and check its contents
      const differentProductWrapper = shallow(
        <SingleProduct fullProduct={aDifferentProduct} store={store} />
      )
      expect(
        differentProductWrapper
          .find('h2')
          .text()
          .trim()
      ).to.be.equal('Ripped Denim Jacket')
      expect(
        differentProductWrapper
          .find('h3')
          .text()
          .trim()
      ).to.be.equal(499)
    })
  })
})
