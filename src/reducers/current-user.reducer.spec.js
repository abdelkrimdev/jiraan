import { authenticationConstants } from '../constants/authentication.constants'
import { currentUser } from './current-user.reducer'

describe('current user reducer', () => {
  it('should have initial state.', () => {
    const action = { type: 'DUMMY_ACTION' }

    expect(currentUser(undefined, action)).toMatchSnapshot()
  })

  it('should return the current state after receiving a dummy action.', () => {
    const state = { data: 'current state' }
    const action = { type: 'DUMMY_ACTION' }

    expect(currentUser(state, action)).toMatchSnapshot()
  })

  it('should handle get current user success.', () => {
    const action = {
      type: authenticationConstants.USER_CURRENT_SUCCESS,
      user: {
        displayName: 'username',
        email: 'user@somewhere.com'
      }
    }

    expect(currentUser({ }, action)).toMatchSnapshot()
  })

  it('should handle get current user failure.', () => {
    const action = {
      type: authenticationConstants.USER_CURRENT_FAILURE,
      error: {
        code: 'error/code',
        message: 'Get Current User Error Message'
      }
    }

    expect(currentUser({ }, action)).toMatchSnapshot()
  })
})
