import {
    GET_USER_DATA,
    USER_DATA_RECEIVED,

    GET_USER_FRIENDS,
    USER_FRIENDS_RECEIVED,

    GET_USER_INBOX,
    USER_INBOX_RECEIVED
} from "./_allActions";

export const getUserData = () => ({
    "type": GET_USER_DATA
});

export const userDataReceived = (nextUserData, hasError) => ({
    "type": USER_DATA_RECEIVED,
    user: nextUserData,
    hasError
});

export const getUserFriends = (id) => ({
    "type": GET_USER_FRIENDS,
    id
});

export const userFriendsReceived = (friendsData, hasError) => ({
    "type": USER_FRIENDS_RECEIVED
});

export const getUserInbox = (id) => ({
    "type": GET_USER_INBOX,
    id
});

export const userInboxReceived = (friendsData, hasError) => ({
    "type": USER_INBOX_RECEIVED
});
