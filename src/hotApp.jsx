import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import { App } from "./App";


// Store für redux...
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { someApp } from "./reducers/reducer";

const store = createStore(
    someApp,
    window.STATE_FROM_SERVER,
    applyMiddleware(thunkMiddleware));

/* eslint-disable no-console */
console.log(store.getState());

const unsubscribe = store.subscribe(
    () => console.log(store.getState())
);


// declare var module: { hot: any };

const rndr = (NextComponent) => {
    const rootEl = document.getElementById("app");
    const domElem = (
        <Provider store={store}>
            <AppContainer>
                {NextComponent}
            </AppContainer>
        </Provider>
    );
    render(domElem, rootEl);
};

if (module.hot) {
    module.hot.accept("./App", () => {
        rndr(<App />);
    });
}
window.onload = () => rndr(<App />);