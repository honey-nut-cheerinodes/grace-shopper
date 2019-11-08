import axios from 'axios'

// action types
const GOT_CART = 'GOT_CART'
// const ADDED_ONE = 'ADDED_ONE'
// const REMOVED_ONE = 'REMOVED_ONE'
// const DELETED_ITEM = 'DELETED_ITEM'
// const CHECKED_OUT = 'CHECKED_OUT'

// action creators
export const gotCart = cart => ({
  type: GOT_CART,
  cart
})

// export const addedOne = addedItem => ({
//   type: ADDED_ONE,
//   addedItem
// })

// export const removedOne = removedItem => ({
//   type: REMOVED_ONE,
//   removedItem
// })

// export const deletedOne = deletedItem => ({
//   type: DELETED_ITEM,
//   deletedItem
// })

// export const checkedOut = checkout => ({
//   type: CHECKED_OUT,
//   checkout
// })

// thunk creators and thunks
export const getCart = () => async dispatch => {
  const {data} = await axios.get('/api/cart')
  dispatch(gotCart(data))
}

// initial state
const initialState = {
  cart: [],
  cartItem: {}
}

// reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CART:
      return {...state, cart: action.cart}
    default:
      return state
  }
}

export default cartReducer
