import React from 'react'
import './order-summary.css'

export const OrderSummary = props => {
  return (
    <div id="order-sum">
      <span className="order-sum-heading">
        <h3>Order Summary</h3>
      </span>
      <span className="order-sum-body">
        <p>Subtotal</p>
        <p>$555</p>
      </span>
      <span className="order-sum-body">
        <p>Shipping</p>
        <p>Free</p>
      </span>
      <span className="order-sum-body">
        <p>Total</p>
        <p>$555</p>
      </span>

      <button type="button" onClick={props.checkout} id="checkout-btn">
        CONTINUE TO CHECKOUT
      </button>
    </div>
  )
}
