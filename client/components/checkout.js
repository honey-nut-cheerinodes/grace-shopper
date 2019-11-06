import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CheckoutItem from './checkout-item'
import OrderSummary from './order-summary'

class Checkout extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    switch (event.method) {
      case 'ADD_ONE':
        return 'add one' // trigger thunk
      case 'REMOVE_ONE':
        return 'remove one' // trigger thunk
      case 'DELETE_ITEM':
        return 'delete item' // trigger thunk
      case 'CHECKOUT':
        return 'continue to checkout' // trigger thunk
      default:
        return 'default'
    }
  }

  render() {
    return (
      <div>
        <Link to="/">← Back to Shopping</Link>
        {this.props.checkoutItems.map(item => {
          // define checkoutItems in action creator
          return (
            <CheckoutItem
              item={item}
              key={item.id}
              handleClick={this.handleClick}
            />
          )
        })}
        {/* do i need separate divs for CheckoutItem and OrderSummary? */}
        <OrderSummary handleClick={this.handleClick} /> {/* add more props? */}
      </div>
    )
  }
}

export default Checkout
