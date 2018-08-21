import { authenticationConstants } from '../constants/authentication.constants'

export const currentUser = (state = { }, action) => {
  switch (action.type) {
    case authenticationConstants.USER_CURRENT_SUCCESS:
      return { user: action.user }
    case authenticationConstants.USER_CURRENT_FAILURE:
      return { error: action.error }
    default:
      return state
  }
}
