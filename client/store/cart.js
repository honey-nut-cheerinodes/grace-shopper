import axios from 'axios'

// action types
const GOT_CART = 'GOT_CART'
const ADDED_ITEM = 'ADDED_ITEM'
const INCREASED = 'INCREASED'
const DECREASED = 'DECREASED'
const REMOVED_ITEM = 'REMOVED_ITEM'

// action creators
export const gotCart = cart => ({
  type: GOT_CART,
  cart
})

export const addedItem = item => ({
  type: ADDED_ITEM,
  item
})

export const increased = item => ({
  type: INCREASED,
  item
})

export const decreased = item => ({
  type: DECREASED,
  item
})

export const removedItem = item => ({
  type: REMOVED_ITEM,
  item
})

// thunk creators and thunks
export const getCart = () => async dispatch => {
  const {data} = await axios.get('/api/cart/')
  let prods = []
  data.forEach(item => {
    prods.push(item.products[0])
  })
  dispatch(gotCart(prods))
}

export const addItem = item => async dispatch => {
  const {data} = await axios.post('/api/cart/', item)
  dispatch(addedItem(data))
}

export const increase = item => async dispatch => {
  item.quantity++
  const {data} = await axios.put('/api/cart/', item)
  dispatch(increased(data))
}

export const decrease = item => async dispatch => {
  item.quantity--
  if (item.quantity === 0) {
    await axios.delete('/api/cart/', item)
    dispatch(removedItem(item))
  }
  const {data} = await axios.put('/api/cart/', item)
  dispatch(decreased(data))
}

export const removeItem = item => async dispatch => {
  await axios.delete('/api/cart/', item)
  dispatch(removedItem(item))
}

// initial state
const initialState = {
  cart: [],
  item: {}
}

// reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CART:
      return {...state, cart: action.cart}
    case ADDED_ITEM:
      return {...state, cart: [...state.cart, action.item]}
    case INCREASED:
      return {...state, cart: [...state.cart, action.item]}
    case DECREASED:
      return {...state, cart: [...state.cart, action.item]}
    case REMOVED_ITEM:
      return {
        ...state,
        cart: [
          ...state.cart.filter(item => {
            return item.id !== action.item.id
          })
        ]
      }
    default:
      return state
  }
}

export default cartReducer
