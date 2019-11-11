import React from 'react'
import './cart-item.css'

export const CartItem = props => {
  const item = props.item

  return (
    <div>
      <hr />
      <div className="cart-line-item">
        <img src={item.imageUrl} />
        <div className="item-info">
          <span className="item-info-top">
            {item.item}
            <button
              type="button"
              onClick={() => props.removeItem(item)}
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
                onClick={() => props.decrease(item)}
                className="decrease-btn"
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                type="button"
                onClick={() => props.increase(item)}
                className="increase-btn"
              >
                +
              </button>
            </span>
            <p>${item.price}</p>
          </span>
        </div>
      </div>
    </div>
  )
}
