import { authenticationConstants } from '../constants/authentication.constants';
import { currentUser } from './current-user.reducer';

describe('current user reducer', () => {
    it('should have initial state.', () => {
        const action = { type: 'DUMMY_ACTION' };

        expect(currentUser(undefined, action)).toMatchSnapshot();
    });

    it('should return the current state after receiving a dummy action.', () => {
        const state = { data: 'current state' };
        const action = { type: 'DUMMY_ACTION' };

        expect(currentUser(state, action)).toMatchSnapshot();
    });

    it('should handle get current user action.', () => {
        const action = {
            type: authenticationConstants.USER_CURRENT_ACTION,
            user: {
                displayName: "username",
                email: "user@somewhere.com"
            }
        };

        expect(currentUser({  }, action)).toMatchSnapshot();
    });

    it('should handle user logout action.', () => {
        const state = { data: 'current user data' };
        const action = { type: authenticationConstants.USER_LOGOUT_ACTION };

        expect(currentUser(state, action)).toMatchSnapshot();
    });
});
