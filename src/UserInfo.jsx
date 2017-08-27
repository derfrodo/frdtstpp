import * as React from "react";
import { connect } from "react-redux";

import { FacebookLogin } from "./FacebookLogin";
import { loginStatusChanged } from "./actions/loginActionCreators";

const InfoComponent = ({ isConnected, data }) => {
    return (
        <div>
            {isConnected ?
                <ul>
                    <li>
                        User ID: {data.id}
                    </li>
                    <li>
                        Name: {data.name}
                    </li>
                </ul> :
                <div>
                    User not logged in.
                </div>
            }
        </div>);
}

export const UserInfo = connect(
    (state, ownProps) => {
        return {
            data: state.currentUser.userData || {},
            isConnected: state.loginStatus.isConnected,
        };
    },
    (dispatch, ownProps) => {
        return {

        };
    }
)(InfoComponent);


export default UserInfo;