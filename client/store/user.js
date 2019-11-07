import axios from 'axios'
import history from '../history'

// action types
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

// initialize state
const defaultUser = {}

// action creators
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

// thunk creators
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const getUserLogin = (email, password) => async dispatch => {
  try {
    if (email && password) {
      let res = await axios.post('/auth/login', {email, password})

      // this basically says it will dispatch data to the store and will redirect to the profile page
      let dispatchTrial = dispatch(getUser(res.data))
      // console.log(res.data)
      if (dispatchTrial) history.push('/profile')

      // console.log('should have posted')
    }
  } catch (err) {
    console.log('there was an error')
    return dispatch(getUser({error: err}))
  }
}

// reducer
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      // console.log('state from reducer', action.user)
      // return {state: action.user}
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}

// PREVIOUS CODE BELOW -----

// export const me = () => async dispatch => {
//   try {
//     const res = await axios.get('/auth/me')
//     dispatch(getUser(res.data || {}))
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const auth = (email, password, method) => async dispatch => {
//   try {
//     let res = await axios.post(`/auth/${method}`, {email, password})
//   } catch (authError) {
//     return dispatch(getUser({error: authError}))
//   }

//   try {
//     dispatch(getUser(res.data))
//     history.push('/home')
//   } catch (dispatchOrHistoryErr) {
//     console.error(dispatchOrHistoryErr)
//   }
// }

// export const logout = () => async dispatch => {
//   try {
//     await axios.post('/auth/logout')
//     dispatch(removeUser())
//     history.push('/login')
//   } catch (err) {
//     console.error(err)
//   }
// }
