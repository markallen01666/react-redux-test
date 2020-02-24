import React from "react";
import { connect } from "react-redux";


const Card = props => {
  return <div style={{backgroundColor: props.COLORS[props.count - 1], ...cardStyle, ...props.style}}></div>;
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
    COLORS: state.COLORS
  };
};

export default connect(mapStateToProps)(Card);
