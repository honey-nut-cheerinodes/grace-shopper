import React from 'react'
export const Checkout = props => {
  // const orderItems = props.items
  return (
    <div>
      <h1>Thank you!</h1>
      <h3>Your order has been processed successfully!</h3>
      <h4>Save the below information for future reference</h4>
      <div id="order-info">
        <p>
          Order Number: <strong>1</strong>
        </p>
        {props.order.id}
        {/* ADD ORDER ITEMS HERE */}
      </div>
    </div>
  )
}
