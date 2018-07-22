import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { authenticationActions } from './authentication.actions';
import { getCurrentUser, signIn, signOut, signUp } from '../services/authentication.service';

jest.mock('../services/authentication.service');
const mockStore = configureStore([ thunkMiddleware ]);

describe('authentication actions', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should create a user with email and password.', async () => {
        const store = mockStore();
        const email = 'user@somewhere.com';
        const password = 'password';

        signUp.mockResolvedValueOnce({
            user: {
                displayName: "username",
                email: "user@somewhere.com"
            }
        });

        await store.dispatch(authenticationActions.signUp(email, password));

        expect(signUp).toHaveBeenCalled();
        expect(signUp).toHaveBeenCalledWith(email, password);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('should capture sign-up errors.', async () => {
        const store = mockStore();
        const email = 'invalid-email.com';
        const password = 'weak-password';

        signUp.mockRejectedValueOnce({
            code: "error/code",
            message: "Create User Error Message"
        });

        await store.dispatch(authenticationActions.signUp(email, password));

        expect(signUp).toHaveBeenCalled();
        expect(signUp).toHaveBeenCalledWith(email, password);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('should login a user with email and password.', async () => {
        const store = mockStore();
        const email = 'user@somewhere.com';
        const password = 'password';

        signIn.mockResolvedValueOnce({
            user: {
                displayName: "username",
                email: "user@somewhere.com"
            }
        });

        await store.dispatch(authenticationActions.signIn(email, password));

        expect(signIn).toHaveBeenCalled();
        expect(signIn).toHaveBeenCalledWith(email, password);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('should capture sign-in errors.', async () => {
        const store = mockStore();
        const email = 'user@somewhere.com';
        const password = 'wrong-password';

        signIn.mockRejectedValueOnce({
            code: "error/code",
            message: "Login User Error Message"
        });

        await store.dispatch(authenticationActions.signIn(email, password));

        expect(signIn).toHaveBeenCalled();
        expect(signIn).toHaveBeenCalledWith(email, password);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('should get the current user.', () => {
        const store = mockStore({  });

        getCurrentUser.mockReturnValue({
            displayName: "username",
            email: "user@somewhere.com"
        });

        store.dispatch(authenticationActions.getCurrentUser());

        expect(getCurrentUser).toHaveBeenCalled();
        expect(store.getActions()).toMatchSnapshot();
    });

    it('should logout the user.', () => {
        const store = mockStore({  });

        store.dispatch(authenticationActions.signOut());

        expect(signOut).toHaveBeenCalled();
        expect(store.getActions()).toMatchSnapshot();
    });
});
