import React from "react";
import ReactDOM from "react-dom";

//Import Whole app
import App from "./components/App/App";
import "bootstrap/dist/css/bootstrap.css";

//Wrap the app with storage provider, pass in createStore
ReactDOM.render(<App />, document.getElementById("root") );
