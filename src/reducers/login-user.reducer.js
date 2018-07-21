import { authenticationConstants } from '../constants/authentication.constants';

export const loginUser = (state = {  }, action) => {
    switch (action.type) {
        case authenticationConstants.USER_LOGIN_REQUEST:
            return {
                ...state,
                fetching: true
            };
        case authenticationConstants.USER_LOGIN_SUCCESS:
            return {
                user: action.user,
                fetching: false
            };
        case authenticationConstants.USER_LOGIN_FAILURE:
            return {
                error: action.error,
                fetching: false,
            };
        default:
            return state;
    }
};
