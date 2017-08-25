import * as React from "react";
import { connect } from "react-redux";
import { loginStatusChanged } from "./actions/loginActionCreator"


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onlogin: () => {
            const status = window.FB.getLoginStatus(l => {
                console.log(l);
                dispatch(loginStatusChanged(l));
            });
        }
    }
}


const LoginTemplate = ({onlogin}) =>
    (<a href="javascript:void(0)"
        onClick={() => window.FB.login(onlogin, { scope: "public_profile,email" })}>
        {/* <div
            className="fb-login-button"
            data-scope="public_profile,email"></div> */}
    login
    </a>)

export const FacebookLogin = connect(
    mapStateToProps,
    mapDispatchToProps)(LoginTemplate);
