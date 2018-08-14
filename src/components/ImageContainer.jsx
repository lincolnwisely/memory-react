import React from "react";
import Image from "./Image.jsx";

const flexStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "0 auto 80px",
  width: "80%"
};

class ImageContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeImages: []
    };

    this.addActiveImage = this.addActiveImage.bind(this);
  }

  addActiveImage(img) {
    console.log(this.state);
    const activeImages = { ...this.state.activeImages };
    const timestamp = Date.now();
    activeImages[`img-${timestamp}`] = img;
    this.setState({ activeImages: activeImages });
  }

  render() {
    return (
      <div style={flexStyle}>
        {this.props.images.map((img, i) => (
          <Image
            key={i}
            src={img.urls.small}
            alt={this.props.query}
            href={img.user.links.self}
            user={img.user.name}
            query={this.props.query}
            addActiveImage={this.addActiveImage}
          />
        ))}
      </div>
    );
  }
}

export default ImageContainer;
