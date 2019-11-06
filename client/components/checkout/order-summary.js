import React from 'react'

const OrderSummary = props => {
  return (
    <div>
      <span>
        <h3>Order Summary</h3>
      </span>
      <span>
        <p className="left">Subtotal</p>
        <p className="right">$555</p>
      </span>
      <span>
        <p className="left">Shipping</p>
        <p className="right">Free</p>
      </span>
      <span>
        <p className="left">Total</p>
        <p className="right">$555</p>
      </span>
      <button type="button" method="CHECKOUT" className="checkout-btn">
        CONTINUE TO CHECKOUT
      </button>
    </div>
  )
}

export default OrderSummary