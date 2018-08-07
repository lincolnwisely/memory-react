import React from "react";
import Image from "./Image.jsx";

const flexStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignContent: "space-around",
  margin: "0 auto",
  width: "80%"
};

class ImageContainer extends React.Component {
  render() {
    return (
      <div style={flexStyle}>
        <Image images={this.props.images} query={this.props.query} />
      </div>
    );
  }
}

export default ImageContainer;
