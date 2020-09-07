import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'

import listsReducer from './reducers/listsReducer'

import fakeBoardReducer from './reducers/fakeBoardReducer'

const reducer = combineReducers({
  user,
  lists: listsReducer,
  lists1: fakeBoardReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
