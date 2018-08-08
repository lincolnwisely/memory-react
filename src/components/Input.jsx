import React from "react";

const formSection = {};

class Input extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: "dog"
    };
  }

  render() {
    return (
      <div className="formSection">
        <span>Or choose your own!</span>
        <form
          className="query-selector"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(this.state.query);
          }}
        >
          <input
            id="search"
            type="text"
            onChange={e => this.setState({ query: e.target.value })}
          />
          <button>Enter</button>
        </form>
      </div>
    );
  }
}

export default Input;
