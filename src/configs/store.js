import { createStore, combineReducers, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import thunkMiddleware from 'redux-thunk'

import { createUser } from '../reducers/create-user.reducer'
import { loginUser } from '../reducers/login-user.reducer'
import { currentUser } from '../reducers/current-user.reducer'

import { authenticationActions } from '../actions/authentication.actions'

const epicMiddleware = createEpicMiddleware()

const store = createStore(
  combineReducers({
    createUser,
    loginUser,
    currentUser
  }),
  applyMiddleware(
    epicMiddleware,
    loggerMiddleware,
    thunkMiddleware
  )
)

epicMiddleware.run(combineEpics())

store.dispatch(authenticationActions.getCurrentUser())

export default store
