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
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      if (state.count >= 26) return { count: 1, alphabet: state.alphabet };
      else
        return (Object.assign({}, state, {
          count: state.count + 1
        }));          
    case "DECREMENT":
      if (state.count <= 1) return { count: 26, alphabet: state.alphabet };
      else
      return (Object.assign({}, state, {
        count: state.count - 1
      }));
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
