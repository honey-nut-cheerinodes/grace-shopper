import React, {Component} from 'react'
import {connect} from 'react-redux'
import OrderHistoryItem from './order-history-item'
import {getOrderHistory} from '../../store/order-history'
import './order-history.css'

class DisconnectedOrderHistory extends Component {
  componentDidMount() {
    this.props.getOrderHistory()
  }

  render() {
    let total = 0

    let orderHistory = this.props.orderHistory || []
    return (
      <div id="order-history-body">
        <div>
          <h1>Order History</h1>
          <h3>We love your taste. Your pet does too.</h3>
        </div>
        <div id="order-history-items">
          {(this.props.orderHistory || []).map((order, idx) => {
            if (orderHistory.length !== 0) {
              for (let i = 0; i < order.products.length; i++) {
                total +=
                  order.products[i].price *
                  order.products[i].orderItems.quantity
              }
              return <OrderHistoryItem item={order} key={idx} total={total} />
            }
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orderHistory: state.orderHistoryReducer.orderHistory,
    orderHistoryItem: state.orderHistoryReducer.orderHistoryItem
  }
}

const mapDispatchToProps = dispatch => ({
  getOrderHistory: () => dispatch(getOrderHistory())
})

const OrderHistory = connect(mapStateToProps, mapDispatchToProps)(
  DisconnectedOrderHistory
)

export default OrderHistory
