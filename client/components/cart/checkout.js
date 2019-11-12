import React from 'react'
import './cart.css'

export const Checkout = () => {
  // const orderItems = props.items
  return (
    <div id="finished-checkout-body">
      <div id="thanks">
        <h1>Thank you!</h1>
        <p>
          Your order has been processed successfully! Save the below information
          for future reference
        </p>
      </div>
      <div id="order-info">
        <table>
          <thead>
            <tr>
              <th colSpan="1">Item</th>
              <th colSpan="1">Quantity</th>
              <th colSpan="1">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sweatshirt</td>
              <td>3</td>
              <td>455</td>
            </tr>
            <tr>
              <td>Dress</td>
              <td>1</td>
              <td>900</td>
            </tr>
            <tr>
              <td>Pants</td>
              <td>2</td>
              <td>500</td>
            </tr>
            <tr>
              <td>Collar</td>
              <td>1</td>
              <td>455</td>
            </tr>
            <tr>
              <td>Glasses</td>
              <td>1</td>
              <td>600</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Checkout
