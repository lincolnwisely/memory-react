import React from "react";
import Input from "./Input.jsx";

const flexStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  margin: "0 auto 30px",
  width: "50%"
};

const border = {
  border: "3px solid #222",
  padding: "3px",
  width: "100px"
};

const topic = {
  fontFamily: "'Inconsolata', monospace",
  display: "inline-block",
  padding: "10px",
  width: "100px",
  backgroundColor: "#222",
  color: "white",
  marginRight: "15px",
  border: "2px solid #222",
  fontSize: "20px"
};

const h3 = {
  fontFamily: "'Inconsolata', monospace",
  fontSize: "36px",
  fontWeight: "400"
};

class Topics extends React.Component {
  render() {
    return (
      <div>
        <h3 style={h3}>Select a topic</h3>
        <div style={flexStyle}>
          <div
            style={topic}
            className="topic dog"
            onClick={e => {
              e.preventDefault();
              this.props.onSubmit("dogs");
            }}
          >
            Dogs
          </div>
          <div
            style={topic}
            className="topic dog"
            onClick={e => {
              e.preventDefault();
              this.props.onSubmit("cities");
            }}
          >
            Cities
          </div>
          <div
            style={topic}
            className="topic dog"
            onClick={e => {
              e.preventDefault();
              this.props.onSubmit("coffee");
            }}
          >
            Coffee
          </div>
        </div>
        <Input onSubmit={this.props.onSubmit} />
        {/* Assign queryvalue prop to this.state.query so that we can pass  the queryvalue prop down to the child */}
        {/* <h2>{this.props.queryvalue}</h2> */}
      </div>
    );
  }
}

export default Topics;
