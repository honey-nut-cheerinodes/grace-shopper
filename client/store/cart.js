import axios from 'axios'

// action types
const GOT_CART = 'GOT_CART'
const ADDED_ITEM = 'ADDED_ITEM'
const UPDATED_ITEM = 'UPDATED_ITEM'
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

export const updatedItem = item => ({
  type: UPDATED_ITEM,
  item
})

export const removedItem = productId => ({
  type: REMOVED_ITEM,
  productId
})

// thunk creators and thunks
export const getCart = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/cart')
    let prods = []
    for (let i = 0; i < data.length; i++) {
      prods.push(data[i].products[0])
    }
    dispatch(gotCart(prods))
  } catch (error) {
    console.error(error)
  }
}

export const addItem = item => async dispatch => {
  try {
    const {data} = await axios.post('/api/cart', item)
    // productinfo: {productinfo}, quantity: quantity
    console.log('is this from the front?', data)
    dispatch(addedItem(data))
    return dispatch(getCart())
  } catch (error) {
    console.error(error)
  }
}

export const updateItem = (productId, orderId, quantity) => async dispatch => {
  try {
    const {data} = await axios.put('/api/cart', {productId, orderId, quantity})
    dispatch(updateItem(data))
    return dispatch(getCart())
  } catch (error) {
    console.error(error)
  }
}

export const removeItem = (productId, orderId) => async dispatch => {
  try {
    await axios.delete('/api/cart', {data: {productId, orderId}})
    return dispatch(getCart())
  } catch (error) {
    console.error(error)
  }
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
      let newItem = action.item.productInfo
      newItem.quantity = action.item.quantity
      // console.log('NEW ITEM?????', newItem)
      // console.log('is it empty?', state.cart)
      // return {...state, cart: [...state.cart, newItem]}

      let hello = {...state, cart: [...state.cart, newItem]}
      // console.log(hello)
      return hello
    case UPDATED_ITEM:
      return {...state, cart: [...state.cart, action.item]}
    default:
      return state
  }
}

export default cartReducer
