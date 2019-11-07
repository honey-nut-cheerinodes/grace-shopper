import React from 'react'
import {Link} from 'react-router-dom'
import './checkout-item.css'

const CheckoutItem = props => {
  return (
    <div>
      <hr />
      <div className="cart-line-item">
        <img src={props.imageUrl} />
        <div className="item-info">
          <span className="item-info-top">
            <Link to="/products">{props.name}</Link>
            <button
              type="button"
              onClick={props.deleteItem}
              className="delete-item-btn"
            >
              x
            </button>
          </span>
          <span className="item-info-bottom">
            <span className="item-quantity">
              <button
                type="button"
                onClick={props.removeOne}
                className="remove-one-btn"
              >
                -
              </button>
              <p>{props.quantity}</p>
              <button
                type="button"
                onClick={props.addOne}
                className="add-one-btn"
              >
                +
              </button>
            </span>
            <p>${props.price}</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem
