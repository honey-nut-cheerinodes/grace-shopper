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

export const getUserLogin = (
  method,
  email,
  password,
  firstName,
  lastName
) => async dispatch => {
  try {
    let res

    if (method === 'login')
      res = await axios.post('/auth/login', {email, password})
    else if (method === 'signup')
      res = await axios.post('auth/signup', {
        email,
        password,
        firstName,
        lastName
      })

    // this basically says it will dispatch data to the store and will redirect to the profile page
    let dispatchTrial = dispatch(getUser(res.data))
    if (dispatchTrial) history.push('/profile')
  } catch (err) {
    console.log('there was an error')
    return dispatch(getUser({error: err}))
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/')
  } catch (err) {
    console.error(err)
  }
}

// reducer
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
