import React from 'react'
import {Link} from 'react-router-dom'

const CheckoutItem = props => {
  return (
    <div>
      <hr />
      <img src={props.imageUrl} />
      <p>
        <Link to="/products/1">{props.name}</Link>
      </p>
      <button type="button" method="DELETE_ITEM" className="delete-item-btn">
        x
      </button>

      <button type="button" method="REMOVE_ONE" className="remove-one-btn">
        -
      </button>
      <p>{props.quantity}</p>
      <button type="button" method="ADD_ONE" className="add-one-btn">
        +
      </button>
      <p>${props.price}</p>
    </div>
  )
}

export default CheckoutItem
