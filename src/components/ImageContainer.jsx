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
      active: false
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ active: true });
  }

  render() {
    return (
      <div style={flexStyle}>
        {this.props.images.map((img, i) => (
          <Image
            key={i}
            src={img.urls.small}
            alt={this.props.query}
            onClick={e => this.handleClick(e)}
            href={img.user.links.self}
            user={img.user.name}
            query={this.props.query}
          />
        ))}
      </div>
    );
  }
}

export default ImageContainer;
