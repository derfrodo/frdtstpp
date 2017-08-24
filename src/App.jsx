import * as React from "react";

// Store für redux...
import { createStore } from "redux";
import { someApp } from "./reducers/reducer";

const store = createStore(someApp, window.STATE_FROM_SERVER);

/* eslint-disable no-console */ 
console.log(store.getState());

export const App = p => {
    return (<div>
        <span className="glyphicon glyphicon-star"></span>
        Ich bin eine App!
        </div>);
};

export default App;