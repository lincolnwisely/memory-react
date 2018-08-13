import React from "react";

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

class Image extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: false
    };
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({ active: true });
  }
  // click event is only firing when state active is already set to true...

  render() {
    return (
      <div className="imgWrap" onClick={e => this.handleClick(e)}>
        <img
          style={this.state.active === false ? imgInactive : imgActive}
          src={this.props.src}
          alt={this.props.alt}
        />
        <p
          className="credit"
          style={this.state.active === false ? creditInactive : creditActive}
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
