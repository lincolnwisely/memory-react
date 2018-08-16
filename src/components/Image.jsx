import React from "react";


// how do i determine if an image is

class Image extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: false
    };
  }


  render() {

    return (
      <div className="imgWrap" >
        <img
          // style={this.state.active === false ? imgInactive : imgActive}
          src={this.props.src}
          alt={this.props.alt}
          style={this.props.imgStyle}
          // onClick={() => this.props.addActiveImage(this)}
          onClick={ (e) => this.props.handleClick(this) }
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
