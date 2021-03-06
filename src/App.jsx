// Some react stuff
import * as React from "react";
import { connect } from "react-redux";

// Components
import { FacebookLogin } from "./FacebookLogin";
import { UserInfo } from "./UserInfo";

// Actions
import { loginStatusChanged } from "./actions/loginActionCreators";


export class RootApp extends React.Component {

    componentDidMount() {
        window.FB.init({
            appId: "106897353319959",
            cookie: true,
            xfbml: true,
            version: 'v2.8'
        });

        this.props.refreshLoginStatus();
    }

    render() {
        return (
            <div>
                <div>
                    <span className="glyphicon glyphicon-star"></span>
                    Ich bin eine App!
                </div>
                <UserInfo />
                <FacebookLogin />
            </div>
        );
    }
}

export const App = connect(
    (state, ownProps) => {
        return {
            isConnected: state.loginStatus.isConnected,
        };
    },
    (dispatch, ownProps) => {
        return {
            refreshLoginStatus: () => {
                window.FB.getLoginStatus(l => {
                    dispatch(loginStatusChanged(l));
                    return Promise.resolve();
                })
            }
        };
    }
)(RootApp);


export default App;