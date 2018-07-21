import { authenticationConstants } from '../constants/authentication.constants';
import { createUser } from './create-user.reducer';

describe('create user reducer', () => {
    it('should have initial state.', () => {
        const action = { type: 'DUMMY_ACTION' };

        expect(createUser(undefined, action)).toMatchSnapshot();
    });

    it('should return the current state after receiving a dummy action.', () => {
        const state = { data: 'current state' };
        const action = { type: 'DUMMY_ACTION' };

        expect(createUser(state, action)).toMatchSnapshot();
    });

    it('should handle create user request.', () => {
        const action = { type: authenticationConstants.USER_CREATE_REQUEST };

        expect(createUser({  }, action)).toMatchSnapshot();
    });

    it('should handle create user success.', () => {
        const state = { fetching: true };
        const action = {
            type: authenticationConstants.USER_CREATE_SUCCESS,
            user: {
                displayName: "username",
                email: "user@somewhere.com"
            }
        };

        expect(createUser(state, action)).toMatchSnapshot();
    });

    it('should handle create user failure.', () => {
        const state = { fetching: true };
        const action = {
            type: authenticationConstants.USER_CREATE_FAILURE,
            error: {
                code: "error/code",
                message: "Create User Error Message"
            }
        };

        expect(createUser(state, action)).toMatchSnapshot();
    });
});
