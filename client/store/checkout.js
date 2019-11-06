import axios from 'axios'

// action types
const GOT_CHECKOUT_ITEMS = 'GOT_CHECKOUT_ITEMS'
const ADDED_ONE = 'ADDED_ONE'
const REMOVED_ONE = 'REMOVED_ONE'
const DELETED_ITEM = 'DELETED_ITEM'
const CHECKED_OUT = 'CHECKED_OUT'

// action creators
export const gotCheckoutItems = checkoutItems => ({
  type: GOT_CHECKOUT_ITEMS,
  checkoutItems
})

export const addedOne = addedItem => ({
  type: ADDED_ONE,
  addedItem
})

export const removedOne = removedItem => ({
  type: REMOVED_ONE,
  removedItem
})

export const deletedOne = deletedItem => ({
  type: DELETED_ITEM,
  deletedItem
})

export const checkedOut = checkout => ({
  type: CHECKED_OUT,
  checkout
})

// thunk creators and thunks
export const getCheckoutItems = () => async dispatch => {
  const {checkoutItems} = await axios.get('/api/checkout/1')
  dispatch(gotCheckoutItems(checkoutItems))
}

// initial state
const initialState = {
  checkoutItems: [
    {
      name: 'Life Jacket',
      price: '555',
      imageUrl:
        'https://ak9.picdn.net/shutterstock/videos/1037370149/thumb/1.jpg?ip=x480',
      quantity: 1
    }
  ]
}

// reducer
const checkoutReducer = (state = initialState, action) => {
  switch (action) {
    case GOT_CHECKOUT_ITEMS:
      return {
        ...state,
        checkoutItem: [...state.checkoutItems, action.checkoutItem]
      }
    default:
      return state
  }
}

export default checkoutReducer
