import React from 'react'
import {Link} from 'react-router-dom'

const CheckoutItem = props => {
  return (
    <div>
      <hr />
      <img src={props.imageUrl} />
      <Link to="/products">{props.name}</Link>
      <button
        type="button"
        onClick={props.deleteItem}
        className="delete-item-btn"
      >
        x
      </button>

      <button
        type="button"
        onClick={props.removeOne}
        className="remove-one-btn"
      >
        -
      </button>
      <p>{props.quantity}</p>
      <button type="button" onClick={props.addOne} className="add-one-btn">
        +
      </button>
      <p>${props.price}</p>
    </div>
  )
}

export default CheckoutItem
