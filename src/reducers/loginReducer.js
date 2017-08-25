
import {
    LOGIN_STATUS_CHANGED,
    FACEBOOK_LOGIN,
    FACEBOOK_LOGGEDIN,
    FACEBOOK_LOGOUT,
    FACEBOOK_LOGGEDOUT
} from "../actions/_allActions";
import { loginStatusChanged } from "../actions/loginActionCreators";
import { getUserData } from "../actions/userActionCreators";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case FACEBOOK_LOGOUT:
        case FACEBOOK_LOGIN:
            return { ...state };
        case FACEBOOK_LOGGEDOUT:
        case FACEBOOK_LOGGEDIN:
            action.asyncDispatch(dispatch => {
                const status = window.FB.getLoginStatus(l => {
                    dispatch(loginStatusChanged(l));
                    return Promise.resolve();
                })
                return Promise.resolve();
            });

            return { ...state }
        case LOGIN_STATUS_CHANGED:
            const nextState = {
                ...state,
                status: action.nextStatus,
                isConnected: action.nextStatus && action.nextStatus.status === "connected",
            };

            if (nextState.isConnected) {
                action.asyncDispatch(dispatch => {
                    dispatch(getUserData());
                });
            }

            return nextState;
        default:
            return state;
    }
}

export default loginReducer;