import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import Routes from "./routes/Routes";
import { createStore } from "redux";
import { Provider } from "react-redux";
import loginReducer from "./reducers/loginReducer";

const store = createStore(loginReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
