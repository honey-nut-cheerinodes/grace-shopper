import axios from 'axios'

// action types
const ADD_ITEM_SESSION = 'ADD_ITEM_SESSION'
const GOT_ITEMS_SESSION = 'GOT_ITEMS_SESSION'

// action creators
const addedItem = product => ({
  type: ADD_ITEM_SESSION,
  product
})

const gotSessionItems = products => {
  return {type: GOT_ITEMS_SESSION, products}
}

export const addItem = product => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/cart/guest`, product)
      return dispatch(addedItem(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const getSessionItems = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/cart/guest`)
      return dispatch(gotSessionItems(data))
    } catch (error) {
      console.error(error)
    }
  }
}

// initial state
const initialState = {
  products: [],
  product: {}
}

// reducer
const guestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ITEMS_SESSION:
      return {...state, products: action.products}
    case ADD_ITEM_SESSION:
      return {...state, products: [...state.products, action.product]}
    default:
      return state
  }
}

export default guestReducer
