import React from 'react'
import './order-summary.css'
export const OrderSummary = props => {
  console.log('PROPSSSS: ', props.cart)

  // let orderId;

  // ((props.cart[0].orderId && props.cart[0].orderId) || []).map(item => {
  //   orderId = item.orderId
  //   return orderId
  // })

  // console.log('ORDER ID: ', orderId)

  const total = props.total
  console.log('totallllllll: ', props)
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
      <a href="/checkout">
        <button type="button" id="checkout-btn">
          CONTINUE TO CHECKOUT
        </button>
      </a>
    </div>
  )
}
