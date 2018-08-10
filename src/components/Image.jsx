import React from "react";

const flexStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "0 auto 80px",
  width: "80%"
};

const imgStyle = {
  width: "100%",
  maxWidth: "240px",
  objectFit: "cover",
  objectPosition: "center",
  height: "220px",
  margin: "0 auto",
  border: "3px solid #222"
};

const fLeft = {
  float: "left",
  maxWidth: "240px",
  height: "220px",
  padding: "7px",
  position: "relative"
};

const pCredit = {
  fontFamily: "'Inconsolata', monospace",
  color: "#ffffff",
  position: "absolute",
  bottom: "2px",
  margin: "0",
  fontSize: "10px",
  textAlign: "center",
  padding: "2px 0px 4px 0px",
  background: "rgba(0,0,0,0.5)",
  width: "243px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
  // display: none;
};

const creditA = {
  color: "#ffffff",
  fontSize: "10px"
};

class Image extends React.Component {
  render() {
    return (
      <div style={fLeft}>
        <img style={imgStyle} src={this.props.src} alt={this.props.alt} />
        <p className="credit" style={pCredit}>
          <a
            style={creditA}
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            via Unsplash
          </a>
          <br />
          <a
            style={creditA}
            href={this.props.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.user}
          </a>
        </p>
      </div>
    );
  }
}

export default Image;
