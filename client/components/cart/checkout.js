import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCart} from '../../store/cart'
import {CheckoutItem} from './checkout-item'
import './cart.css'

class DisconnectedCheckout extends Component {
  componentDidMount() {
    this.props.getCart()
  }

  render() {
    let total = 0
    // const cart = this.props.cart[0]
    // this logs the entire obj, incl. orderId
    // console.log('cart: ', cart.orderId)
    // but then it errors out here as undefined
    return (
      <div id="finished-checkout-body">
        <div id="thanks">
          <h1>Thank you!</h1>
          <p className="thanks-body">
            Your order has been processed successfully!
          </p>
          <p className="thanks-body">
            Check your email for your order confirmation.
          </p>
          <h3>Order Details</h3>
          {/* <p>Your order number is 000000{this.props.cart[0]}</p> */}
          {(this.props.cart || []).map((item, idx) => {
            total += item.price * item.quantity
            return <CheckoutItem item={item} key={idx} />
          })}
          <br />
          <br />
          <p id="order-total">Total: ${total}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart,
    item: state.cartReducer.item
  }
}

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart())
})

const Checkout = connect(mapStateToProps, mapDispatchToProps)(
  DisconnectedCheckout
)

export default Checkout
