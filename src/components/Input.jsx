import React from "react";

class Input extends Component {
  render() {
    return (
      <div>
        <span>Or choose your own!</span>
        <input
          id="search"
          value={this.props.queryvalue}
          onChange={this.props.queryChange}
          defaultValue="dogs"
          ref={input => {
            this.storeInput = input;
          }}
        />
        <button>Enter</button>
      </div>
    );
  }
}

export default Input;
