import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {CartProducts} from './cart-products'
import {OrderSummary} from './order-summary'
import {connect} from 'react-redux'
import {getCart} from '../../store/cart'
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
    return (
      <div id="checkout-body">
        <div id="cart">
          <Link to="/">← Back to Shopping</Link>
          {(this.props.cart || []).map(elem => {
            return (
              <CartProducts
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

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  }
}

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart())
})

const Cart = connect(mapStateToProps, mapDispatchToProps)(DisconnectedCart)

export default Cart
