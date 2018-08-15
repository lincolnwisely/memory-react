import React from "react";

// const imgActive = {
//   border: "2px solid hotpink",
//   outline: "3px solid hotpink",
//   outlineOffset: "-4px"
// };

// const imgInactive = {
//   border: "3px solid #222",
//   display: "none"
// };

// const creditActive = {
//   fontFamily: "'Inconsolata', monospace",
//   color: "#ffffff",
//   position: "absolute",
//   bottom: "0",
//   left: "4px",
//   margin: "0",
//   fontSize: "10px",
//   padding: "2px 0px 4px 0px",
//   background: "rgba(0,0,0,0.5)",
//   width: "236px",
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-around"
// };

// const creditInactive = {
//   display: "none"
// };

// how do i determine if an image is

class Image extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: false
    };
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   const img = this.props.src;
  //   console.log(this.state);
  //   this.setState({ active: true });
  //   this.props.addActiveImage(this.props.id);
  //   this.props.compare();
  // }


  // click event is only firing when state active is already set to true...
  // ...because the click event was set on img, which doesn't display when active: false

// Move parent div to imageContainer, inside for loop. pass in img style IF IF IF image is in state.activeImages array. Somehow have to loop through that array??

  render() {
    return (
      <div className="imgWrap" >
        <img
          // style={this.state.active === false ? imgInactive : imgActive}
          src={this.props.src}
          alt={this.props.alt}
          style={this.props.imgStyle}
        />
        <p
          className="credit"
          style={this.props.creditStyle}
        >
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            via Unsplash
          </a>
          <br />
          <a href={this.props.href} target="_blank" rel="noopener noreferrer">
            {this.props.user}
          </a>
        </p>
      </div>
    );
  }
}

export default Image;
