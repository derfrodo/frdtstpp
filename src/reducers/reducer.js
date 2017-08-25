import { LOGIN_STATUS_CHANGED } from "../actions/_allActions";

const initialState = {
    loginStatus: {
        status: {},
        nextNumber: undefined,
    },
}

export const someApp = (state = initialState, action) => {
    console.log("New action:")
    console.log(action)

    switch (action.type) {
        case LOGIN_STATUS_CHANGED:
            return { ...state, loginStatus: reduceLoginStatus(state.loginStatus, action) };
        case "Anoter known action":
            return { ...state }; //additional property if needed...
        default:
            console.warn("Unknown action type: " + action.type);
            return state;
    }
}

const reduceLoginStatus = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_STATUS_CHANGED:
            console.log("new login status: ");
            console.log(action.nextStatus);
            return { ...state, status: action.nextStatus, nextNumber: action.someNumber };
        default:
            console.warn("Unknown action type: " + action.type);
            return state;
    }
}