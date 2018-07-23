import { createStore, combineReducers, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { createUser } from '../reducers/create-user.reducer'
import { loginUser } from '../reducers/login-user.reducer'
import { currentUser } from '../reducers/current-user.reducer'

const store = createStore(
  combineReducers({
    createUser,
    loginUser,
    currentUser
  }),
  applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
  )
)

export default store
