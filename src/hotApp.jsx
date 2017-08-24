import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import { App } from "./App";

// declare var module: { hot: any };

const rndr = (NextComponent) => {
    const rootEl = document.getElementById("app");
    const domElem = (<AppContainer>
        {NextComponent}
    </AppContainer>);
    render(domElem, rootEl);
};

if (module.hot) {
    module.hot.accept("./App", () => {
        rndr(<App />);
    });
}
window.onload = () => rndr(<App />);