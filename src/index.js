import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const initialState = {
  count: 1,
  alphabet: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ],
  COLORS: [
    "#FF5733",
    "#CAFF33",
    "#33C4FF",
    "#FF3371",
    "#3FFF33",
    "#FCFF33",
    "#33FFB5",
    "#FF33F0",
    "#FF3C33",
    "#C433FF",
    "#33F6FF",
    "#262B74",
    "#4B7426",
    "#267449",
    "#742666",
    "#744F26",
    "#677426",
    "#A5F1AC",
    "#AAA5F1",
    "#F1A5E4",
    "#F1A5B1",
    "#DEE63B",
    "#4B3BE6",
    "#74E63B",
    "#E69E3B",
    "#3BE6E1"
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      if (state.count >= 26)
        return Object.assign({}, state, {
          count: 1
        });
      else
        return Object.assign({}, state, {
          count: state.count + 1
        });
    case "DECREMENT":
      if (state.count <= 1)
        return Object.assign({}, state, {
          count: 26
        });
      else
        return Object.assign({}, state, {
          count: state.count - 1
        });
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
