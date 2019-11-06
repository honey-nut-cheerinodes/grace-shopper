import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CheckoutItem from './checkout-item'
import OrderSummary from './order-summary'
import {connect} from 'react-redux'
import getCheckoutItems from '../store/checkout'

class Checkout extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    switch (event.method) {
      case 'ADD_ONE':
        this.props.getCheckoutItems()
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
        <div>
          <Link to="/">← Back to Shopping</Link>
          {this.props.checkoutItems.map(item => {
            return (
              <CheckoutItem
                item={item}
                key={item.id}
                handleClick={this.handleClick}
              />
            )
          })}
        </div>
        <div>
          <OrderSummary handleClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  checkoutItems: state.checkoutItems,
  checkoutItem: state.checkoutItem
})

const mapDispatchToProps = dispatch => ({
  getCheckoutItems: orderId => dispatch(getCheckoutItems(orderId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
