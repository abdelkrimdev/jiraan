import { authenticationConstants } from '../constants/authentication.constants';

export const currentUser = (state = {  }, action) => {
    switch (action.type) {
        case authenticationConstants.USER_CURRENT_ACTION:
            return { data: action.user };
        case authenticationConstants.USER_LOGOUT_ACTION:
            return {  };
        default:
            return state;
    }
};
