import React, { Component } from "react";
import "./App.css";
import Topics from "./components/Topics.jsx";
import { shuffle } from "./helpers.js";
import { getData } from "./helpers.js";
import ImageContainer from "./components/ImageContainer.jsx";
import Footer from "./components/Footer.jsx";

const bodyStyles = {
  fontFamily: "'Inconsolata', monospace",
  textAlign: "center",
  fontSize: "20px",
  position: "relative",
  minHeight: "100vh"
};

const h1 = {
  padding: "20px",
  width: "50%",
  textAlign: "center",
  margin: "30px auto",
  border: "3px solid #222",
  boxShadow: "10px 10px #222"
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      query: "banana"
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(query) {
    this.getData(query);
  }

  getData(query) {
    fetch("https://api.unsplash.com/search/photos/?query=" + query, {
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

            this.setState({ query, hits });

            console.log("hits", hits);
          });
        } else if (response.status === 401) {
          alert("Oops! You are not authorized.");
        }
      },
      function(e) {
        alert("Error submitting form!");
      }
    );
  }

  componentDidMount() {
    this.getData(this.state.query);
  }

  render() {
    return (
      <div className="App" style={bodyStyles}>
        <h1 style={h1}>Memory Game</h1>
        <Topics onSubmit={this.onSubmit} />
        <ImageContainer
          images={this.state.hits}
          query={this.state.query}
          duplicateHits={this.duplicateHits}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
