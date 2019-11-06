import React from 'react'
import {Link} from 'react-router-dom'

const CheckoutItem = props => {
  return (
    <div>
      <hr />
      {/* <img src={} /> { /* need to access image from productId foreign key and have it passed in from parent component */}{' '}
      */ }
      <p>
        <Link to="/products/:id">The Twill Weekender</Link>
      </p>{' '}
      {/* access via props */}
      <button type="button" method="DELETE_ITEM" className="delete-item-btn">
        x
      </button>
      <p>Size: One Size</p> {/*  access via props */}
      <p>Color: Reverse Denim + Black Leather</p> {/*  access via props */}
      <button type="button" method="REMOVE_ONE" className="remove-one-btn">
        -
      </button>
      <p>1</p> {/* access quantity via props */}
      <button type="button" method="ADD_ONE" className="add-one-btn">
        +
      </button>
      <p>$98</p> {/* access via props */}
    </div>
  )
}

export default CheckoutItem
