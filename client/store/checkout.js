import axios from 'axios'

// action types
const GOT_CHECKOUT_ITEMS = 'GOT_CHECKOUT_ITEMS'
// const ADDED_ONE = 'ADDED_ONE'
// const REMOVED_ONE = 'REMOVED_ONE'
// const DELETED_ITEM = 'DELETED_ITEM'
// const CHECKED_OUT = 'CHECKED_OUT'

// action creators
export const gotCheckoutItems = checkoutItems => ({
  type: GOT_CHECKOUT_ITEMS,
  checkoutItems
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
export const getCheckoutItems = () => async dispatch => {
  const {checkoutItems} = await axios.get('/checkout/1') // check path
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
  ],
  checkoutItem: {
    name: 'Denim Jacket',
    price: '499',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0470/2117/products/squarish_2_2048x.jpg?v=1566880912',
    quantity: 1
  }
}

// reducer
const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CHECKOUT_ITEMS:
      return {...state, checkoutItems: action.checkoutItems} // double check this
    default:
      return state
  }
}

export default checkoutReducer
