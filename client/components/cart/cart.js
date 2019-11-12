import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {CartItem} from './cart-item'
import {OrderSummary} from './order-summary'
import {connect} from 'react-redux'
import {getCart} from '../../store/cart'
import {
  getSessionItems,
  updateSessionItem,
  removeItem
} from '../../store/guest-checkout'
import {getSessionItems} from '../../store/guest-checkout'
import './cart.css'

class DisconnectedCart extends Component {
  constructor(props) {
    super(props)
    this.incrementQuantity = this.incrementQuantity.bind(this)
    this.decrementQuantity = this.decrementQuantity.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  componentDidMount() {
    this.props.getCart()
    this.props.getSessionCart()
  }

  incrementQuantity = (id, count) => {
    count += 1
    this.props.updateSessionItem(id, count)
  }

  decrementQuantity = (id, count) => {
    count -= 1
    this.props.updateSessionItem(id, count)
  }

  removeItem = productId => {
    this.props.removeItem(productId)
  }

  render() {
    let cart = this.props.sessionCart
    let sum = 0

    console.log(cart)

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
            sum += elem.price * elem.quantity
            return (
              <CartItem
                elem={elem}
                key={elem.id}
                addOne={this.addOne}
                removeOne={this.removeOne}
                deleteItem={this.deleteItem}
                increment={this.incrementQuantity}
                decrement={this.decrementQuantity}
                removeItem={this.removeItem}
              />
            )
          })}
        </div>
        <div>
          <OrderSummary total={sum} />
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
  getSessionCart: () => dispatch(getSessionItems()),
  updateSessionItem: (productId, quantity) =>
    dispatch(updateSessionItem(productId, quantity)),
  removeItem: productId => dispatch(removeItem(productId))
  getSessionCart: () => dispatch(getSessionItems())
})

const Cart = connect(mapStateToProps, mapDispatchToProps)(DisconnectedCart)

export default Cart

// Seeing if someone has information in their cart, if so THAT takes priority. If not, check if they have session cart information, if so serve that. If nothing, serve an empty cart

// THIS IS FOR CHECKING IF THERE'S A USER CART OR A GUEST SESSION CART,
// COMMENTED FOR NOW TO FORCE THE SESSION CART
// if (this.props.cart.length > 0) {
//   cart = this.props.cart
// } else if (this.props.sessionCart.length > 0) {
