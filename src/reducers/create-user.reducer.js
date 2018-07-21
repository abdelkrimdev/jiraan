import { authenticationConstants } from '../constants/authentication.constants';

export const createUser = (state = {  }, action) => {
    switch (action.type) {
        case authenticationConstants.USER_CREATE_REQUEST:
            return {
                ...state,
                fetching: true
            };
        case authenticationConstants.USER_CREATE_SUCCESS:
            return {
                user: action.user,
                fetching: false
            };
        case authenticationConstants.USER_CREATE_FAILURE:
            return {
                error: action.error,
                fetching: false,
            };
        default:
            return state;
    }
};
