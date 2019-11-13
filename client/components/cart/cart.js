import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {CartItem} from './cart-item'
import {OrderSummary} from './order-summary'
import {connect} from 'react-redux'
import {getCart, updateItem, removeItem} from '../../store/cart'
import {
  getSessionItems,
  updateSessionItem,
  removeItemGuest
} from '../../store/guest-checkout'
import './cart.css'

class DisconnectedCart extends Component {
  constructor(props) {
    super(props)
    this.incrementQuantity = this.incrementQuantity.bind(this)
    this.decrementQuantity = this.decrementQuantity.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }
  componentDidMount() {
    this.props.isLoggedIn ? this.props.getCart() : this.props.getSessionItems()
  }

  incrementQuantity(id, quantity, orderId) {
    console.log('its coming here!')
    quantity = Number(quantity) + 1

    if (this.props.isLoggedIn) this.props.updateItem(id, quantity, orderId)
    else this.props.updateSessionItem(id, quantity)
  }

  decrementQuantity(id, quantity, orderId) {
    quantity -= 1

    if (quantity > 0) {
      if (this.props.isLoggedIn) this.props.updateItem(id, quantity, orderId)
      else this.props.updateSessionItem(id, quantity)
    }
  }

  removeItem(productId, orderId) {
    if (this.props.isLoggedIn) this.props.removeItem(productId, orderId)
    else this.props.removeItemGuest(productId)
  }

  render() {
    let cart
    let sum = 0
    if (this.props.isLoggedIn) {
      cart = this.props.cart
    } else {
      cart = this.props.sessionCart
    }

    return (
      <div id="checkout-body">
        <div id="cart">
          <div className="header">
            <Link to="/">← Back to Shopping</Link>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart">
              Nothing to see here. Time to get shopping!
            </div>
          ) : (
            (cart || []).map((item, idx) => {
              sum += item.price * item.quantity
              return (
                <CartItem
                  item={item}
                  key={idx}
                  loggedIn={this.props.isLoggedIn}
                  incrementQuantity={this.incrementQuantity}
                  decrementQuantity={this.decrementQuantity}
                  removeItem={this.removeItem}
                />
              )
            })
          )}
        </div>
        <p>{this.props.cart.name}</p>
        <div>
          <OrderSummary total={sum} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    random: state.cartReducer,
    cart: state.cartReducer.cart,
    item: state.cartReducer.item,
    sessionCart: state.guestCheckout.products
  }
}
const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart()),
  getSessionItems: () => dispatch(getSessionItems()),
  updateItem: (id, quantity, orderId) =>
    dispatch(updateItem(id, quantity, orderId)),
  updateSessionItem: (id, quantity) =>
    dispatch(updateSessionItem(id, quantity)),
  removeItem: (productId, orderId) => dispatch(removeItem(productId, orderId)),
  removeItemGuest: productId => dispatch(removeItemGuest(productId))
})
const Cart = connect(mapStateToProps, mapDispatchToProps)(DisconnectedCart)
export default Cart
