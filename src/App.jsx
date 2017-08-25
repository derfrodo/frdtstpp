import * as React from "react";

import { FacebookLogin } from "./FacebookLogin";

export const App = p => {
    return (
        <div>
            <div>
                <span className="glyphicon glyphicon-star"></span>
                Ich bin eine App!
                </div>
            <FacebookLogin />
        </div>
    );
};

export default App;