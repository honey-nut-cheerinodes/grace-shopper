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
    console.log('props: ', this.props.cart[0])
    return (
      <div id="finished-checkout-body">
        <div id="thanks">
          <h1>Thank you!</h1>
          <p>Your order has been processed successfully!</p>
          {/* </div> */}
          {/* <div id="order-history-info"> */}
          <br />
          <CheckoutItem />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cartReducer.cart,
  item: state.cartReducer.item
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart())
})

const Checkout = connect(mapStateToProps, mapDispatchToProps)(
  DisconnectedCheckout
)

export default Checkout
