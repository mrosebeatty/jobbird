import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

const GET_USER = 'GET_USER'

const gotMe = user => ({
  type: GET_USER,
  user
})
// const setFetchingStatus = (isFetching) => ({
//   type: SET_FETCHING_STATUS,
//   isFetching,
// })
export const fetchMe = () => {
  return async dispatch => {
    // dispatch(setFetchingStatus(true))
    try {
      const response = await axios.get('/auth/me')
      dispatch(gotMe(response.data))
    } catch (error) {
      console.error(error)
    } //finally {
    // dispatch(setFetchingStatus(false))
    //}
  }
}
export const login = credentials => {
  return async dispatch => {
    const response = await axios.put('/auth/login', credentials)
    dispatch(gotMe(response.data))
  }
}
export const logout = () => {
  return async dispatch => {
    await axios.delete('/auth/logout')
    dispatch(gotMe({}))
  }
}
const initialState = {
  user: {
    isFetching: true
  }
}
// const GET_USER = 'GET_USER'
// const gotMe = (user) => ({
//   type: GET_USER,
//   user,
// })
// export const getMe = () => (dispatch) => {
//   return axios
//     .get('/auth/me')
//     .then((res) => res.data)
//     .then((user) => dispatch(gotMe(user)))
//     .catch(console.error.bind(console))
// }
// export const login = (formData) => (dispatch) => {
//   return axios
//     .put('/auth/login', formData)
//     .then((res) => res.data)
//     .then((user) => dispatch(gotMe(user)))
//     .catch(console.error.bind(console))
// }
// export const logout = () => (dispatch) => {
//   return axios
//     .delete('/auth/logout')
//     .then(() => dispatch(gotMe(initialState.user)))
//     .catch(console.error.bind(console))
// }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user
        }
        //   }
        // case SET_FETCHING_STATUS:
        //   return {
        //     ...state,
        //     user: {
        //       ...state.user,
        //       isFetching: action.isFetching,
        //     },
      }
    default:
      return state
  }
}
export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)
