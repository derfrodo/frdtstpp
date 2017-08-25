
// Store für redux...
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { someApp, reduceLoginStatus } from "./reducers/reducer";


/* Credits goes to:
https://lazamar.github.io/dispatching-from-inside-of-reducers/
*/

const asyncDispatchMiddleware = store => next => action => {
    let syncActivityFinished = false;
    let actionQueue = [];

    function flushQueue() {
        actionQueue.forEach(a => store.dispatch(a)); // flush queue
        actionQueue = [];
    }

    function asyncDispatch(asyncAction) {
        actionQueue = actionQueue.concat([asyncAction]);

        if (syncActivityFinished) {
            flushQueue();
        }
    }

    const actionWithAsyncDispatch =
        Object.assign({}, action, { asyncDispatch });

    next(actionWithAsyncDispatch);
    syncActivityFinished = true;
    flushQueue();
};


const store = createStore(
    combineReducers(
        {
            loginStatus:reduceLoginStatus,
        }

    ),
    window.STATE_FROM_SERVER,
    applyMiddleware([asyncDispatchMiddleware, thunkMiddleware]));

/* eslint-disable no-console */
console.log(store.getState());

const unsubscribe = store.subscribe(
    () => console.log(store.getState())
);

export default store;