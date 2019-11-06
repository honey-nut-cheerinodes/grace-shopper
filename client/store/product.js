import axios from 'axios'

const initialState = {
  products: [],
  product: {}
}

//action type for single product
export const SINGLE_PRODUCT = 'SINGLE_PRODUCT'
export const ALL_PRODUCTS = 'ALL_PRODUCTS'

//create single product action creator
export const singleProduct = product => {
  return {
    type: SINGLE_PRODUCT,
    product
  }
}

//single product thunk
export const getSingleProduct = id => async dispatch => {
  const {data} = await axios.get(`/api/products/${id}`)
  dispatch(singleProduct(data))
}

//reducer
const product = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {...state, products: action.products}
    case SINGLE_PRODUCT:
      return {...state, product: action.product}
    default:
      return state
  }
}

export default product
