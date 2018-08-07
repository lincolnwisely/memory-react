import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Topics from "./components/Topics.jsx";

// import Image from 'components/Image.jsx';
import ImageContainer from "./components/ImageContainer.jsx";

// import 'idk.js';

// styles

const flexStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignContent: "space-around",
  margin: "0 auto",
  width: "80%"
};

// const flexCol = {
//   display: "flex",
//   flexDirection: "column",
//   padding: "10px"
// };

// Data method

const API = "https://api.unsplash.com/search/photos/?query=";
// const DEFAULT_QUERY = 'dog'; // to be changed...

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      query: "dogs"
    };

    this.duplicateHits = this.duplicateHits.bind(this);
    this.queryChange = this.queryChange.bind(this);
  }

  queryChange(e) {
    var querVal = e.target.value;
    console.log(querVal);
    this.setState({ query: querVal });
  }

  componentDidMount() {
    fetch(API + this.state.query, {
      method: "GET",
      headers: {
        Authorization:
          "Client-ID 70c38f7f44fea0275d6b98177a480c6e23d833cfcfb7672e8efb3f43b150c39a"
      }
    }).then(
      response => {
        if (response.ok) {
          response.json().then(data => {
            let dupArray = data.results;
            this.duplicateHits(dupArray);
            this.setState({ hits: dupArray });
            console.log("dupArray", dupArray);
            // this.setState({ hits: data.results })
            // how and ... where... do i duplicate the hits array in state?
          });

          console.log("sucecss?");
        } else if (response.status === 401) {
          alert("Oops! You are not authorized.");
        }
      },
      function(e) {
        alert("Error submitting form!");
      }
    );
  }

  duplicateHits(myArray) {
    myArray.reduce((res, current, index, array) => {
      return res.concat([current, current]);
    }, []);
    console.log("hello?");
  }

  render() {
    const { hits } = this.state;
    console.log("hits", hits);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Select a topic</h3>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Topics queryvalue={this.state.query} queryChange={this.queryChange} />
        <ImageContainer style={flexStyle} images={this.state.hits} />
      </div>
    );
  }
}

export default App;
