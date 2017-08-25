import * as React from "react";
import { connect } from "react-redux";

import { FacebookLogin } from "./FacebookLogin";
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
                <FacebookLogin />
            </div>
        );
    }
}

const InfoComponent = ({ }) => {
    return (
        <div>
            UserComponent
    </div>);
}

export const UserInfo = connect(
    (state, ownProps) => {
        return {

        };
    },
    (dispatch, ownProps) => {
        return {

        };
    }
)(InfoComponent);


export default UserInfo;