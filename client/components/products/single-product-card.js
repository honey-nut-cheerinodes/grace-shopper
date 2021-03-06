import React from 'react'
import {Link} from 'react-router-dom'

import './single-product-card.css'
export const SingleProductCard = props => {
  const product = props.product

  return (
    <div className="all-products-card">
      <Link to={`products/${product.id}`}>
        <img className="all-products-img" src={`${product.imageUrl}`} />
        <div className="horizontal">
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
