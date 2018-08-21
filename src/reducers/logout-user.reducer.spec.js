import { authenticationConstants } from '../constants/authentication.constants'
import { logoutUser } from './logout-user.reducer'

describe('logout user reducer', () => {
  it('should have initial state.', () => {
    const action = { type: 'DUMMY_ACTION' }

    expect(logoutUser(undefined, action)).toMatchSnapshot()
  })

  it('should return the current state after receiving a dummy action.', () => {
    const state = { data: 'current state' }
    const action = { type: 'DUMMY_ACTION' }

    expect(logoutUser(state, action)).toMatchSnapshot()
  })

  it('should handle logout user request.', () => {
    const action = { type: authenticationConstants.USER_LOGOUT_REQUEST }

    expect(logoutUser({ }, action)).toMatchSnapshot()
  })

  it('should handle logout user success.', () => {
    const state = { fetching: true }
    const action = {
      type: authenticationConstants.USER_LOGOUT_SUCCESS,
      user: {
        displayName: 'username',
        email: 'user@somewhere.com'
      }
    }

    expect(logoutUser(state, action)).toMatchSnapshot()
  })

  it('should handle logout user failure.', () => {
    const state = { fetching: true }
    const action = {
      type: authenticationConstants.USER_LOGOUT_FAILURE,
      error: {
        code: 'error/code',
        message: 'Logout User Error Message'
      }
    }

    expect(logoutUser(state, action)).toMatchSnapshot()
  })
})
