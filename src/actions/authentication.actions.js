import { authenticationConstants } from '../constants/authentication.constants'
import { getCurrentUser, signIn, signOut, signUp } from '../services/authentication.service'

export const authenticationActions = {
  signUp: (email, password) => {
    return async (dispatch) => {
      try {
        dispatch(request())

        const payload = await signUp(email, password)

        dispatch(success(payload.user))
      } catch (error) {
        dispatch(failure(error))
      }
    }

    function request () {
      return { type: authenticationConstants.USER_CREATE_REQUEST }
    }
    function success (user) {
      return { type: authenticationConstants.USER_CREATE_SUCCESS, user }
    }
    function failure (error) {
      return { type: authenticationConstants.USER_CREATE_FAILURE, error }
    }
  },
  signIn: (email, password) => {
    return async (dispatch) => {
      try {
        dispatch(request())

        const payload = await signIn(email, password)

        dispatch(success(payload.user))
      } catch (error) {
        dispatch(failure(error))
      }
    }

    function request () {
      return { type: authenticationConstants.USER_LOGIN_REQUEST }
    }
    function success (user) {
      return { type: authenticationConstants.USER_LOGIN_SUCCESS, user }
    }
    function failure (error) {
      return { type: authenticationConstants.USER_LOGIN_FAILURE, error }
    }
  },
  getCurrentUser: () => {
    return (dispatch) => {
      getCurrentUser((user) => {
        dispatch(success(user))
      }, (error) => {
        dispatch(failure(error))
      })
    }

    function success (user) {
      return { type: authenticationConstants.USER_CURRENT_SUCCESS, user }
    }
    function failure (error) {
      return { type: authenticationConstants.USER_CURRENT_FAILURE, error }
    }
  },
  signOut: () => {
    signOut()
    return { type: authenticationConstants.USER_LOGOUT_ACTION }
  }
}
