
// Store für redux...
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers/reducer";


/* Credits goes to:
https://lazamar.github.io/dispatching-from-inside-of-reducers/
Seems not to work that perfectly with thunk package.
*/

const asyncDispatchMiddleware = store => next => action => {
    if (action.type) {
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
    }
    else{
        next(action);
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    window.STATE_FROM_SERVER, 
    composeEnhancers(applyMiddleware(thunkMiddleware, asyncDispatchMiddleware)));

/* eslint-disable no-console */
// console.log(store);
// console.log(store.getState());

// const unsubscribe = store.subscribe(
//     () => console.log(store.getState())
// );

export default store;