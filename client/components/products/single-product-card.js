import React from 'react'
import {Link} from 'react-router-dom'

import './single-product-card.css'
export const SingleProductCard = props => {
  const product = props.product
  console.log('product', product)
  return (
    <div className="all-products-card">
      <Link to={`products/${product.id}`}>
        <div>
          <img className="all-products-img" src={`${product.imageUrl}`} />
        </div>
        <div className="horizontal">
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
