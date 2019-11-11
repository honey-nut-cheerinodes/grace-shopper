import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {CartItem} from './cart-item'
import {OrderSummary} from './order-summary'
import {connect} from 'react-redux'
import {getCart, increase, decrease, removeItem} from '../../store/cart'
import {getSessionItems} from '../../store/guest-checkout'
import './cart.css'

class DisconnectedCart extends Component {
  constructor(props) {
    super(props)
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  componentDidMount() {
    this.props.getCart()
    this.props.getSessionCart()
  }

  increase(item) {
    this.props.increase(item)
  }

  decrease(item) {
    this.props.decrease(item)
  }

  removeItem(item) {
    this.props.removeItem(item)
  }

  render() {
    let cart

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
            return (
              <CartItem
                item={item}
                key={idx}
                increase={this.increase}
                decrease={this.decrease}
                removeItem={this.removeItem}
              />
            )
          })}
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cartReducer.cart,
  item: state.cartReducer.item,
  sessionCart: state.guestCheckout.products
})

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart()),
  increase: item => dispatch(increase(item)),
  decrease: item => dispatch(decrease(item)),
  removeItem: item => dispatch(removeItem(item)),
  getSessionCart: () => dispatch(getSessionItems())
})

const Cart = connect(mapStateToProps, mapDispatchToProps)(DisconnectedCart)

export default Cart
