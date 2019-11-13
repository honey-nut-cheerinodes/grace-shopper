import React from 'react'
import './cart-item.css'

export const CheckoutItem = props => {
  const item = props.item
  return (
    <div>
      <hr />
      <div className="cart-line-item">
        <img src={item.imageUrl} />
        <div className="item-info">
          <span className="item-info-top">{item.name}</span>
          <p id="item-size">Size: One Size Fur All</p>
          <br />
          <br />
          <span className="item-info-bottom">
            <span className="item-quantity">
              <p>Quantity: {item.quantity}</p>
            </span>
            <p>${item.price * item.quantity}</p>
          </span>
        </div>
      </div>
    </div>
  )
}
