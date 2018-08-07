import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div>
        <span>Or choose your own!</span>
        <input
          id="search"
          type="text"
          value={this.props.queryvalue}
          onChange={this.props.queryChange}
          ref={input => {
            this.queryInput = input;
          }}
        />
        <button>Enter</button>
      </div>
    );
  }
}

export default Input;
