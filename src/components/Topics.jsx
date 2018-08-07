import React from "react";
import Input from "./Input.jsx";

class Topics extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  //   this.state = {
  //     query:''
  //   }
  // }

  render() {
    return (
      <div>
        <h3>Select a topic</h3>
        {/* <div className="icons">
          <div className="topic dog" queryvalue="dogs" >Dogs</div>
          <div className="topic city" queryvalue="city">Cities</div><br/>
          <div className="topic coffee" queryvalue="coffee">Coffee</div><br/>
        </div> */}
        <Input
          queryvalue={this.props.queryvalue}
          queryChange={this.props.queryChange}
        />
        {/* Assign queryvalue prop to this.state.query so that we can pass  the queryvalue prop down to the child */}
        <h2>{this.props.queryvalue}</h2>
      </div>
    );
  }
}

export default Topics;
