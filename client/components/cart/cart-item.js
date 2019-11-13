import React from 'react'
import './cart-item.css'
export const CartItem = props => {
  const item = props.item
  const itemID = props.loggedIn ? item.id : item.productId
  const itemName = props.loggedIn ? item.name : item.item

  return (
    <div>
      <hr />
      <div className="cart-line-item">
        <img src={item.imageUrl} />
        <div className="item-info">
          <span className="item-info-top">
            {itemName}
            <button
              type="button"
              onClick={() => props.removeItem(itemID, item.orderId)}
              className="remove-item-btn"
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
                onClick={() =>
                  props.decrementQuantity(itemID, item.quantity, item.orderId)
                }
                className="decrease-btn"
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                type="button"
                onClick={() => {
                  props.incrementQuantity(itemID, item.quantity, item.orderId)
                }}
                className="increase-btn"
              >
                +
              </button>
            </span>
            <p>${item.price * item.quantity}</p>
          </span>
        </div>
      </div>
    </div>
  )
}
