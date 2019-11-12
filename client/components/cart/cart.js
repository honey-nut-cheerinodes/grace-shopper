import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {CartItem} from './cart-item'
import {OrderSummary} from './order-summary'
import {connect} from 'react-redux'
import {getCart, updateItem, removeItem} from '../../store/cart'
import {getSessionItems, updateSessionItem} from '../../store/guest-checkout'
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

    // ADD THIS BACK WHEN READY TO MERGE WITH GUEST CART!!!!!
    // this.props.getSessionCart()
  }

  incrementQuantity(id, orderId, quantity) {
    quantity = Number(quantity) + 1
    // console.log('is it hitting this func?')
    this.props.updateItem(id, orderId, quantity)
  }

  decrementQuantity(id, orderId, quantity) {
    quantity -= 1
    if (quantity === 0) {
      this.props.removeItem(id)
    }
    this.props.updateItem(id, orderId, quantity)
  }

  removeItem(productId, orderId) {
    this.props.removeItem(productId, orderId)
  }

  render() {
    let cart

    let sum = 0

    if (this.props.cart.length > 0) {
      cart = this.props.cart
    } else if (this.props.sessionCart.length > 0) {
      cart = this.props.sessionCart
    }

    return (
      <div id="checkout-body">
        <div id="cart">
          <Link to="/">← Back to Shopping</Link>
          {(cart || []).map((item, idx) => {
            sum += item.price * item.quantity

            return (
              <CartItem
                item={item}
                key={idx}
                incrementQuantity={this.incrementQuantity}
                decrementQuantity={this.decrementQuantity}
                removeItem={this.removeItem}
              />
            )
          })}
        </div>
        <p>{this.props.cart.name}</p>
        <div>
          <OrderSummary total={sum} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  random: state.cartReducer,
  cart: state.cartReducer.cart,
  item: state.cartReducer.item,
  sessionCart: state.guestCheckout.products
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart()),
  updateItem: (id, orderId, quantity) =>
    dispatch(updateItem(id, orderId, quantity)),
  updateSessionItem: (id, quantity) =>
    dispatch(updateSessionItem(id, quantity)),
  removeItem: (productId, orderId) => dispatch(removeItem(productId, orderId)),
  getSessionCart: () => dispatch(getSessionItems())
})

const Cart = connect(mapStateToProps, mapDispatchToProps)(DisconnectedCart)

export default Cart
