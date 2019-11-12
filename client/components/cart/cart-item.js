import React from 'react'
import './cart-item.css'

export const CartItem = props => {
  const item = props.elem

  const increment = props.increment
  const decrement = props.decrement
  const removeItem = props.removeItem
  
  // access this.props.cart.elem.products.item.price (elem from mapping over cart)
  // put subtotal and total on local state or on store?
  return (
    <div>
      <hr />
      <div className="cart-line-item">
        <img src={item.imageUrl} />
        <div className="item-info">
          <span className="item-info-top">
            {item.name}
            <button
              type="button"
              onClick={() => removeItem(item.productId)}
              onClick={item.deleteItem}
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
                onClick={() => {
                  if (item.quantity > 0)
                    decrement(item.productId, item.quantity)
                }}
                onClick={item.removeOne}
                className="remove-one-btn"
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                type="button"
                onClick={() => increment(item.productId, item.quantity)}
                onClick={item.addOne}
                className="add-one-btn"
              >
                +
              </button>
            </span>
            <p>${item.price * item.quantity}</p>
            <p>${item.price}</p>
          </span>
        </div>
      </div>
    </div>
  )
}
