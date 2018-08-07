import React from "react";

class Input extends React.Component {
  searchForQuery(event) {
    event.preventDefault();
    const query = this.queryInput.value;
    console.log(query);
  }

  render() {
    return (
      <div>
        <span>Or choose your own!</span>
        <form className="query-selector" onSubmit={e => this.searchForQuery(e)}>
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
        </form>
      </div>
    );
  }
}

export default Input;
