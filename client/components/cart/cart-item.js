import React from 'react'
import {Link} from 'react-router-dom'
import './cart-item.css'

export const CartItem = props => {
  console.log('props.item.price: ', props.item.price)
  // access this.props.cart.elem.products.item.price (elem from mapping over cart)
  return (
    <div>
      <hr />
      <div className="cart-line-item">
        <img src={props.item.imageUrl} />
        <div className="item-info">
          <span className="item-info-top">
            {props.item.name}
            <button
              type="button"
              onClick={props.item.deleteItem}
              className="delete-item-btn"
            >
              X
            </button>
          </span>
          <p>Size: One Size Fur All</p>
          <br />
          <br />
          <span className="item-info-bottom">
            <span className="item-quantity">
              <button
                type="button"
                onClick={props.item.removeOne}
                className="remove-one-btn"
              >
                -
              </button>
              <p>{props.item.orderItems.quantity}</p>
              <button
                type="button"
                onClick={props.item.addOne}
                className="add-one-btn"
              >
                +
              </button>
            </span>
            <p>${props.item.price}</p>
          </span>
        </div>
      </div>
    </div>
  )
}
