import React from 'react'
import {CartItem} from './cart-item'

export const CartProducts = props => {
  return (
    <div>
      {(props.elem.products || []).map(item => {
        return <CartItem item={item} key={item.id} />
      })}
    </div>
  )
}
