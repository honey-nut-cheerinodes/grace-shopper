import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {CartItem} from './cart-item'
import {OrderSummary} from './order-summary'
import {connect} from 'react-redux'
import {getCart} from '../../store/cart'
import {getSessionItems} from '../../store/guest-checkout'
import './cart.css'

class DisconnectedCart extends Component {
  // constructor(props) {
  //   super(props)
  //   this.addOne = this.addOne.bind(this)
  //   this.removeOne = this.removeOne.bind(this)
  //   this.deleteItem = this.deleteItem.bind(this)
  //   this.checkout = this.checkout.bind(this)
  // }

  componentDidMount() {
    this.props.getCart()
    this.props.getSessionCart()
  }

  // addOne() {
  //
  // }

  // removeOne() {

  // }

  // deleteItem() {

  // }

  // checkout() {

  // }

  render() {
    // Seeing if someone has information in their cart, if so THAT takes priority. If not, check if they have session cart information, if so serve that. If nothing, serve an empty cart
    let cart

    // THIS IS FOR CHECKING IF THERE'S A USER CART OR A GUEST SESSION CART,
    // COMMENTED FOR NOW TO FORCE THE SESSION CART
    // if (this.props.cart.length > 0) {
    //   cart = this.props.cart
    // } else if (this.props.sessionCart.length > 0) {
    cart = this.props.sessionCart
    // }

    return (
      <div id="checkout-body">
        <div id="cart">
          <Link to="/">← Back to Shopping</Link>
          {(cart || []).map(elem => {
            return (
              <CartItem
                elem={elem}
                key={elem.id}
                addOne={this.addOne}
                removeOne={this.removeOne}
                deleteItem={this.deleteItem}
              />
            )
          })}
        </div>
        <div>
          <OrderSummary checkout={this.checkout} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cartReducer.cart,
  sessionCart: state.guestCheckout.products
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart()),
  getSessionCart: () => dispatch(getSessionItems())
})

const Cart = connect(mapStateToProps, mapDispatchToProps)(DisconnectedCart)

export default Cart
