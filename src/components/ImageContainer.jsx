import React from "react";
import Image from "./Image.jsx";

const imgStyle = {
  width: "100%",
  maxWidth: "300px"
};

class ImageContainer extends React.Component {
  // render() {
  //   return (
  //     <div style={flexStyle}>
  //       {/* <Image style={imgStyle} source={this.props.images } images={this.props.images} /> */}
  //     </div>
  //   )
  // }
  // const { imgs } = this.props.images;
  // console.log(this.props.images);

  render() {
    return <Image style={imgStyle} images={this.props.images} />;
  }
}

export default ImageContainer;
