import React from "react";
import Image from "./Image.jsx";

const flexStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "0 auto 80px",
  width: "80%"
};

const imgActive = {
  border: "2px solid hotpink",
  outline: "3px solid hotpink",
  outlineOffset: "-4px"
};

const imgInactive = {
  border: "3px solid #222",
  display: "none"
};

const creditActive = {
  fontFamily: "'Inconsolata', monospace",
  color: "#ffffff",
  position: "absolute",
  bottom: "0",
  left: "4px",
  margin: "0",
  fontSize: "10px",
  padding: "2px 0px 4px 0px",
  background: "rgba(0,0,0,0.5)",
  width: "236px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
};

const creditInactive = {
  display: "none"
};

class ImageContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeImages: []
    };

    // this.addActiveImage = this.addActiveImage.bind(this);
    this.compareActiveImages = this.compareActiveImages.bind(this);
  }

  // handleClick(e, id) {
  //   e.preventDefault();
  //   // const img = this.props.src;
  //   // console.log(this.state);
  //   // this.setState({ active: true });
  //   this.addActiveImage(id);
  //   // this.props.compare();
  // }

  addActiveImage(img) {
    console.log(img)
    // img is undefined
    console.log(this.state);
    console.log(this.props.images);
    // const activeImages = { ...this.state.activeImages };
    // this.setState({ activeImages: this.state.activeImages.concat(img) });
    this.setState({activeImages: img});
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
          <div onClick={() => this.addActiveImage(img.id)} key={i}>
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
            imgStyle={this.state.activeImages.includes(img.id) ? imgActive : imgInactive }
            creditStyle={this.state.activeImages.includes(img.id) ? creditActive : creditInactive}

          />
          </div>
        ))}
      </div>
    );
  }
}

export default ImageContainer;
