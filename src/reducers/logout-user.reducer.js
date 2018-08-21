import { authenticationConstants } from '../constants/authentication.constants'

export const logoutUser = (state = { }, action) => {
  switch (action.type) {
    case authenticationConstants.USER_LOGOUT_REQUEST:
      return { fetching: true }
    case authenticationConstants.USER_LOGOUT_SUCCESS:
      return { fetching: false }
    case authenticationConstants.USER_LOGOUT_FAILURE:
      return {
        error: action.error,
        fetching: false
      }
    default:
      return state
  }
}
