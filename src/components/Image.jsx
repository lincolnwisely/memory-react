import React from "react";

// how do i determine if an image is

class Image extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: false,
      matched: false
    };
  }


  render() {
    return (


      <div className={`imgWrap active-${this.state.active}`}
      onClick={() => this.props.handleClick(this)}
      >
        <img
          src={this.props.src}
          alt={this.props.alt}
          style={this.props.imgStyle}
        />

        <p className="credit" style={this.props.creditStyle}>
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
