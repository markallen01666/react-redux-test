import React from "react";
import { connect } from "react-redux";

const COLORS = [
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
];

const Card = props => {
  return <div style={{backgroundColor: COLORS[props.count - 1], ...cardStyle, ...props.style}}></div>;
};

const cardStyle = {
  display: "flex",
  flex: 1,
  margin: 50,
  marginTop: 10,
  padding: "5%",
  color: "#444"
};

// Redux store
const mapStateToProps = state => {
  return {
    count: state.count,
    alphabet: state.alphabet
  };
};

export default connect(mapStateToProps)(Card);
