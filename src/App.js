import React from "react";
import { connect } from "react-redux";

import "./App.css";

const App = props => {
  // change count value in Redux store on button click
  const increment = () => {
    props.dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    props.dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="App" style={{ ...appStyle }}>
      <h1 style={{ ...bannerStyle }}>Basic demo app for playing with Redux</h1>
      <div style={{ ...boxStyle }}>
        <button style={{ ...buttonStyle }} onClick={decrement}>
          -
        </button>
        <div style={{ ...textContainerStyle }}>
          <div style={{ ...scoreElement }}>Position:</div>
          <div style={{ ...scoreElement }}>{props.count}</div>
        </div>
        <button style={{ ...buttonStyle }} onClick={increment}>
          +
        </button>
      </div>
      <div style={{ ...boxStyle }}>
        <div style={{ ...textContainerStyle }}>
          <div style={{ ...scoreElement }}>Letter of alphabet:</div>
          <div style={{ ...scoreElement }}>{props.alphabet[props.count - 1]}</div>
        </div>
      </div>
    </div>
  );
};

// styling
const appStyle = {
  display: "flex",
  flex: 1,
  maxWidth: "100%",
  flexDirection: "column"
};

const bannerStyle = {
  color: "#6F1E51"
};

const boxStyle = {
  display: "flex",
  justifyContent: "space-around",
  flex: 1,
  margin: 50,
  borderWidth: 2,
  borderColor: "#000000",
  padding: 50,
  backgroundColor: "#cccccc"
};

const buttonStyle = {
  flex: 1
};

const textContainerStyle = {
  display: "flex",
  flexDirection: "row",
  flex: 6,
  justifyContent: "space-between"
};

const scoreElement = {
  flex: 1
};

// Redux store
const mapStateToProps = state => {
  return {
    count: state.count,
    alphabet: state.alphabet
  };
};

export default connect(mapStateToProps)(App);
