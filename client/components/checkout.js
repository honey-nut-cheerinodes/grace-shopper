import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CheckoutItem from './checkout-item'
import OrderSummary from './order-summary'

class Checkout extends Component {
  render() {
    return (
      <div>
        <Link to="/">← Back to Shopping</Link>
        {// define this.props.checkoutItems somewhere
        this.props.checkoutItems.map(item => {
          return (
            <CheckoutItem
              item={item}
              key={item.id}
              handleClick={this.handleClick}
            />
          )
        })}
        <OrderSummary />
      </div>
    )
  }
}

export default Checkout
