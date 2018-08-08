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
  margin: "0 auto"
};

const fLeft = {
  float: "left",
  maxWidth: "240px",
  height: "220px",
  padding: "5px",
  position: "relative"
};

const pCredit = {
  fontFamily: "'Inconsolata', monospace",
  color: "#ffffff",
  position: "absolute",
  bottom: "5px",
  margin: "0",
  fontSize: "10px",
  textAlign: "center",
  padding: "2px 0px 4px 0px",
  background: "rgba(0,0,0,0.5)",
  width: "240px",
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
      <div style={flexStyle}>
        {this.props.images.map((img, i) => (
          <div style={fLeft} key={i}>
            <img style={imgStyle} src={img.urls.small} alt={this.props.query} />
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
                href={img.user.links.self}
                target="_blank"
                rel="noopener noreferrer"
              >
                {img.user.name}
              </a>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Image;
