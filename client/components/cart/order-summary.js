import React from 'react'
import './order-summary.css'
export const OrderSummary = props => {
  const total = props.total
  return (
    <div id="order-sum">
      <span className="order-sum-heading">
        <h3>Order Summary</h3>
      </span>
      <span className="order-sum-body">
        <p>Subtotal</p>
        <p>${total}</p>
      </span>
      <span className="order-sum-body">
        <p>Shipping</p>
        <p>Free</p>
      </span>
      <span className="order-sum-body">
        <p>Total</p>
        <p>${total}</p>
      </span>
      {/* <button type="button" href="/checkout" id="checkout-btn">
        CONTINUE TO CHECKOUT
      </button> */}
      <a href="/checkout">
        <button type="button" id="checkout-btn">
          CONTINUE TO CHECKOUT
        </button>
      </a>
    </div>
  )
}
