import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CheckoutItem from './checkout-item'
import OrderSummary from './order-summary'
import {connect} from 'react-redux'
import {getCheckoutItems} from '../../store/checkout'

class Checkout extends Component {
  // constructor(props) {
  //   super(props)
  //   this.addOne = this.addOne.bind(this)
  //   this.removeOne = this.removeOne.bind(this)
  //   this.deleteItem = this.deleteItem.bind(this)
  //   this.addOne = this.addOne.bind(this)
  // }

  componentDidMount() {
    this.props.getCheckoutItems()
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
      <div>
        <div>
          <Link to="/">← Back to Shopping</Link>
          {console.log('mapped checkout items: ', this.props)}
          {(this.props.checkoutItems || []).map(item => {
            return (
              <CheckoutItem
                item={item}
                key={item.id}
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
  console.log('mappedStateToProps: ', state)
  return {
    checkoutItems: state.checkoutItems,
    checkoutItem: state.checkoutItem
  }
}

const mapDispatchToProps = dispatch => ({
  getCheckoutItems: () => dispatch(getCheckoutItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
