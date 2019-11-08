import axios from 'axios'

// action types
const ADD_ITEM_SESSION = 'ADD_ITEM_SESSION'

// action creators
const addedItem = product => ({
  type: ADD_ITEM_SESSION,
  product
})

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

// initial state
const initialState = {
  products: [],
  product: {}
}

// reducer
const guestReducer = (state = initialState, action) => {
  switch (action) {
    case ADD_ITEM_SESSION:
      return {...state, products: [...state.products, action.product]}
    default:
      return state
  }
}

export default guestReducer
