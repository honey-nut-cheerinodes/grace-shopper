import React, {Component} from 'react'
import {getAllProducts} from '../../store/product'
import {connect} from 'react-redux'
import {SingleProductCard} from '../products/single-product-card'

import './all-products.css'
class DisconnectedAllProducts extends Component {
  componentDidMount() {
    this.props.getAllProducts()
  }
  render() {
    //figure out which set of items the user wants to see, based on URL path
    let type = this.props.match.url.slice(1)

    const products = this.props.products.filter(product => {
      if (product.type === type || type === 'all') return product
    })

    return (
      <div id="all-products">
        {products !== undefined ? (
          products.map(product => {
            return <SingleProductCard key={product.id} product={product} />
          })
        ) : (
          <div />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.product.products
})

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts())
})

const AllProducts = connect(mapStateToProps, mapDispatchToProps)(
  DisconnectedAllProducts
)
export default AllProducts
