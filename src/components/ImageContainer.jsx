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
    // this.applyStyle = this.applyStyle.bind(this);
    // this.compareActiveImages = this.compareActiveImages.bind(this);
  }

  // handleClick(component) {
  //   console.log('handle click', component);
  //   this.addActiveImage(component);
  /** Keep commented out  */

  // var className = this.state.activeImages.includes(e) ? 'active' : 'inactive'
  // console.log(className);
  /** Keep commented out  */

  // }

  addActiveImage(component) {
    this.setState({ activeImages: this.state.activeImages.concat(component) });
    this.applyStyle(component);
  }

  someFunction(imgComponent) {
    this.setState({ activeImages: { img: imgComponent, status: false } });
  }

  applyStyle(img) {
    /** Keep commented out  */
    // var className = this.state.activeImages.includes(img) ? 'active' : 'inactive'
    // console.log(className);
    /** Keep commented out  */
  }

  /** Keep commented out  */
  // componentDidUpdate() {
  //   var className = this.state.activeImages.includes(img) ? 'active' : 'inactive'
  //   console.log(className);
  // }
  /** Keep commented out  */

  //issues:

  componentDidUpdate() {
    this.compareActiveImages();
  }

  compareActiveImages() {
    console.log("function was triggered");
    if (this.state.activeImages.length === 2) {
      console.log("that is two");
      if (
        this.state.activeImages[0].props.id ===
        this.state.activeImages[1].props.id
      ) {
        console.log("it's a match!!");
        // somehow make both images permanently visible...
      } else {
        this.setState({ activeImages: [] });
        // hide images again...
      }
    } else {
      console.log("either less than 2, orrrr the equals 2 logic is off");
    }

    /** Keep commented out  */
    // if (
    //   this.state.activeImages[1] === this.state.activeImages[2]
    // ) {
    //   console.log("it's a match!!");
    //   // somehow make both images permanently visible...
    // } else {
    //   this.setState({ activeImages: [] });
    //   // hide images again...
    // }
    /** Keep commented out  */
  }

  render() {
    return (
      <div style={flexStyle}>
        {this.props.images.map((img, i) => (
          // <div onClick={() => this.addActiveImage({[i] : img.id})} key={i}>
          <Image
            key={i}
            // img={img}
            id={img.id}
            active={img.active}
            src={img.urls.small}
            alt={this.props.query}
            href={img.user.links.self}
            user={img.user.name}
            query={this.props.query}
            addActiveImage={this.props.addActiveImage}
            // applyStyle={this.applyStyle(img)}
            handleClick={this.props.handleClick}
            // imgStyle={this.state.activeImages.includes(img) ? imgActive : imgInactive }
            className={
              this.state.activeImages.includes(this) ? "active" : "inactive"
            }
            // onClick={ (e) => this.handleClick(e.target) }

            compare={this.props.compareActiveImages}
            // imgStyle={this.applyStyle(i, img.id) }
            // creditStyle={this.state.activeImages.includes({i: img.id}) ? creditActive : creditInactive}
          />
        ))}
      </div>
    );
  }
}

export default ImageContainer;
