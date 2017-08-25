import * as React from "react";
import { connect } from "react-redux";

import { FacebookScopes } from "./FacebookConstants";

import {
    logInFacebook,
    loggedInFacebook,
    logOutFacebook,
    loggedOutFacebook
} from "./actions/loginActionCreators"

const mapStateToProps = (state, ownProps) => {
    return {
        isConnected: state.loginStatus.isConnected,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onlogin: () => dispatch(loginFunction()),
        onlogout: () => dispatch(logoutFunction())
    }
}


const loginFunction = () => {
    return dispatch => {
        dispatch(logInFacebook())
        window.FB.login(() => {
            dispatch(loggedInFacebook())
        }, {
                scope:
                FacebookScopes.join(",")
            });
        return Promise.resolve();
    }
}

const logoutFunction = () => {
    return dispatch => {
        dispatch(logOutFacebook())
        window.FB.logout(() => { dispatch(loggedOutFacebook()) });
        return Promise.resolve();
    }
}

const LoginTemplate = ({ isConnected, onlogout, onlogin }) => {
    return (
        <div>
            <a href="javascript:void(0)" onClick={onlogin}>login ({isConnected ? "connected" : "not connected"})</a>
            <a href="javascript:void(0)" onClick={onlogout}>logout ({isConnected ? "connected" : "not connected"})</a>
        </div>);
}
export const FacebookLogin = connect(
    mapStateToProps,
    mapDispatchToProps)(LoginTemplate);
