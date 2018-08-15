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
    this.compareActiveImages = this.compareActiveImages.bind(this);
  }

  addActiveImage(img) {
    console.log(this.state);
    console.log(img);
    // const activeImages = { ...this.state.activeImages };
    this.setState({ activeImages: this.state.activeImages.concat(img) });

    // this.setState({ activeImages: [...this.state.activeImages, img] }); //simple value

    // this option adds objects to the activeImages array. Each object has a unique key. Can only work if I compare just the value... ugh
    // const timestamp = Date.now();
    // activeImages[`img-${timestamp}`] = img;
    // this.setState({ activeImages: activeImages });
  }

  compareActiveImages() {
    if (
      this.state.activeImages[1] === this.state.activeImages[2]
    ) {
      console.log("it's a match!!");
      // somehow make both images permanently visible...
    } else {
      this.setState({ activeImages: [] });
      // hide images again...
    }
  }

  render() {
    return (
      <div style={flexStyle}>
        {this.props.images.map((img, i) => (
          <Image
            key={i}
            id={img.id}
            src={img.urls.small}
            alt={this.props.query}
            href={img.user.links.self}
            user={img.user.name}
            query={this.props.query}
            addActiveImage={this.addActiveImage}
            compare={this.compareActiveImages}
          />
        ))}
      </div>
    );
  }
}

export default ImageContainer;
