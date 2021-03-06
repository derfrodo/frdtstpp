import {
    LOGIN_STATUS_CHANGED,
    FACEBOOK_LOGIN,
    FACEBOOK_LOGGEDIN,
    FACEBOOK_LOGOUT,
    FACEBOOK_LOGGEDOUT,
} from "./_allActions";

export const loginStatusChanged = (nextStatus) => ({
    "type": LOGIN_STATUS_CHANGED,
    nextStatus,
    "someNumber": Math.random()
});

export const logInFacebook = () => ({
    "type": FACEBOOK_LOGIN
});

export const loggedInFacebook = () => ({
    "type": FACEBOOK_LOGGEDIN
});

export const logOutFacebook = () => ({
    "type": FACEBOOK_LOGOUT
});

export const loggedOutFacebook = () => ({
    "type": FACEBOOK_LOGGEDOUT
});


