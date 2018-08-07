import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Topics from "./components/Topics.jsx";
import { shuffle } from "./helpers.js";
import ImageContainer from "./components/ImageContainer.jsx";

const API = "https://api.unsplash.com/search/photos/?query=";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      query: "dogs"
    };

    this.queryChange = this.queryChange.bind(this);
  }

  queryChange(e) {
    var querVal = e.target.value;
    this.setState({ query: querVal });
  }

  componentDidMount() {
    console.log(this.state.query);
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
            let hits = data.results;

            // Duplicate array before passing to state.
            hits = hits.reduce((res, current, index, array) => {
              return res.concat([current, current]);
            }, []);

            shuffle(hits);

            this.setState({ hits });

            console.log("hits", hits);
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

  // duplicateHits() {
  //   const hitsArray = { ...this.state.hits };
  //   console.log("hits", hitsArray);

  //   hitsArray = hitsArray.reduce((res, current, index, array) => {
  //     return res.concat([current, current]);
  //   }, []);

  //   this.setState({ hits: hitsArray });

  //   this.setState(prevState => ({
  //     arrayvar: [...prevState.arrayvar, newelement]
  //   }));

  //   console.log("hello?");
  //   // console.log(hits);
  // }

  shuffleArray(arr) {}

  render() {
    // const { hits } = this.state;
    // console.log("hits", hits);
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
        <ImageContainer
          images={this.state.hits}
          query={this.state.query}
          duplicateHits={this.duplicateHits}
        />
      </div>
    );
  }
}

export default App;
