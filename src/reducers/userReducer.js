import {
    GET_USER_DATA,
    USER_DATA_RECEIVED,

    GET_USER_FRIENDS,
    USER_FRIENDS_RECEIVED,

    GET_USER_INBOX,
    USER_INBOX_RECEIVED

} from "../actions/_allActions";

import { userDataReceived, getUserFriends, userFriendsReceived, getUserInbox, userInboxReceived } from "../actions/userActionCreators";

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_DATA:
            action.asyncDispatch(dispatch => {
                performUserDataRequest(dispatch);
            }
            )
            return { ...state }
        case USER_DATA_RECEIVED:
            if (!action.hasError) {
                action.asyncDispatch(dispatch => {
                    dispatch(getUserFriends(action.user.id));
                    dispatch(getUserInbox(action.user.id));
                })
            }
            return { ...state }
        case GET_USER_FRIENDS:
            action.asyncDispatch(dispatch => {
                performUserFriendsRequest(action.id, dispatch);
            });
            return { ...state };
        case USER_FRIENDS_RECEIVED:

            return { ...state };

        case GET_USER_INBOX:
            action.asyncDispatch(dispatch => {
                performUserInboxRequest(action.id, dispatch);
            });
            return { ...state };
        case USER_INBOX_RECEIVED:
            return { ...state };
        default:
            return state;
    }
}

const performUserDataRequest = (dispatch) => {
    FB.api('/me', { fields: ["id", "name", "first_name", "last_name", "birthday"] }, function (response) {
        console.log(response);
        dispatch(userDataReceived(response, false));
    });
};

const performUserFriendsRequest = (id, dispatch) => {

    FB.api(`/${id}/friends`, function (response) {
        console.log(response);
        dispatch(userFriendsReceived(response, false));
    });
};

const performUserInboxRequest = (id, dispatch) => {

    FB.api(`/${id}/inbox`, function (response) {
        console.log(response);
        dispatch(userInboxReceived(response, false));
    });
};
export default userReducer;