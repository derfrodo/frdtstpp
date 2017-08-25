import * as React from "react";
import { connect } from "react-redux";
import { loginStatusChanged, logInFacebook, loggedInFacebook } from "./actions/loginActionCreator"


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onlogin: () => dispatch(loginFunction()),
    }
}

const loginFunction = () => {
    return dispatch => {
        dispatch(logInFacebook())
        window.FB.login(() => {
            dispatch(loggedInFacebook())
            const status = window.FB.getLoginStatus(l => {
                dispatch(loginStatusChanged(l));
                return Promise.resolve();
            });
        }, { scope: "public_profile,email" });
        return Promise.resolve();
    }
}

const LoginTemplate = ({dispatch, onlogin}) => {

    return (<a href="javascript:void(0)" onClick={onlogin}>
        login
    </a>);
}
export const FacebookLogin = connect(
    mapStateToProps,
    mapDispatchToProps)(LoginTemplate);
