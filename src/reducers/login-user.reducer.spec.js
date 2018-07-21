import { authenticationConstants } from '../constants/authentication.constants';
import { loginUser } from './login-user.reducer';

describe('login user reducer', () => {
    it('should have initial state.', () => {
        const action = { type: 'DUMMY_ACTION' };

        expect(loginUser(undefined, action)).toMatchSnapshot();
    });

    it('should return the current state after receiving a dummy action.', () => {
        const state = { data: 'current state' };
        const action = { type: 'DUMMY_ACTION' };

        expect(loginUser(state, action)).toMatchSnapshot();
    });

    it('should handle login user request.', () => {
        const action = { type: authenticationConstants.USER_LOGIN_REQUEST };

        expect(loginUser({  }, action)).toMatchSnapshot();
    });

    it('should handle login user success.', () => {
        const state = { fetching: true };
        const action = {
            type: authenticationConstants.USER_LOGIN_SUCCESS,
            user: {
                displayName: "username",
                email: "user@somewhere.com"
            }
        };

        expect(loginUser(state, action)).toMatchSnapshot();
    });

    it('should handle login user failure.', () => {
        const state = { fetching: true };
        const action = {
            type: authenticationConstants.USER_LOGIN_FAILURE,
            error: {
                code: "error/code",
                message: "Login User Error Message"
            }
        };

        expect(loginUser(state, action)).toMatchSnapshot();
    });
});
