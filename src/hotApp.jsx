import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import { App } from "./App";
import { Provider } from "react-redux";
import store from "./store";

// declare var module: { hot: any }

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