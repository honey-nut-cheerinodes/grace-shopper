import React from 'react'
import './order-history-item.css'

const OrderHistoryItem = props => {
  const item = props.item
  const orderTotal = props.total
  const date = item.updatedAt.slice(0, 10)
  let orderDate = String(new Date(date)).slice(4)
  let count = 0
  for (let i = 0; i < orderDate.length; i++) {
    orderDate[i] === ' ' && count++
    if (count === 3) {
      orderDate = orderDate.slice(0, i)
      break
    }
  }
  return (
    <div>
      <hr />
      <div id="order-history-item">
        <div id="item-image">
          <img src="https://ae01.alicdn.com/kf/HTB1KOHvSpXXXXaeapXXq6xXFXXXw/New-Chic-dog-Crochet-Dog-Sweater-Owl-Design-Knit-Sweater-Pet-Dog-Puppy-Small-Dogs-Winter.jpg" />
        </div>
        <div id="item-details">
          <h3 id="date">{orderDate}</h3>
          <p>Order ID: 000000{item.id}</p>
          <p>Order Status: {item.status}</p>
          <p>Order Total: ${orderTotal}</p>
        </div>
      </div>
    </div>
  )
}

export default OrderHistoryItem
