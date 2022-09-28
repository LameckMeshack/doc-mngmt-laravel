import React from "react";
import ReactDOM from "react-dom";

function App() {
    return (
        <div className="">
            <h1>This is firsre cts</h1>
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
