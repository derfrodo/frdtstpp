import { combineReducers } from "redux";

import { userReducer } from "./userReducer";
import { loginReducer } from "./loginReducer";
import initialState from "./state";

const baseReducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return { ...state, someValidation: { randomNumber: Math.random() } };
    }
}

const combinedReducers = combineReducers({
    loginStatus: loginReducer,
    currentUser: userReducer,
    someValidation: (state = {}) => state
});

export const rootReducer = (state = initialState, action) => {
    console.log("New action:")
    console.log(action)

    const intermediateState = combinedReducers(state, action);
    const nextState = baseReducer(intermediateState, action)

    console.log("Next State:")
    console.log(nextState)
    return nextState;
}