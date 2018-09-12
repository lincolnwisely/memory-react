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
      query: "banana",
      activeImages: [],
      solvedImages: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.addActiveImage = this.addActiveImage.bind(this);
    this.applyStyle = this.applyStyle.bind(this);
    this.compareActiveImages = this.compareActiveImages.bind(this);
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

  componentDidUpdate() {
    this.compareActiveImages();
  }

  compareActiveImages() {
    console.log("function was triggered");
    console.log("active state", this.state.activeImages);
    if (this.state.activeImages.length === 2) {
      console.log("that is two");
      if (
        this.state.activeImages[0].props.id ===
        this.state.activeImages[1].props.id
      ) {
        console.log("it's a match!!");
        this.state.solvedImages.push(this.state.activeImages);
        // somehow make both images permanently visible...
      } else {
        this.setState({ activeImages: [] });
        // hide images again...
      }
    } else {
      console.log("either less than two, orrrr the equals 2 logic is off");
    }

    // if (
    //   this.state.activeImages[1] === this.state.activeImages[2]
    // ) {
    //   console.log("it's a match!!");
    //   // somehow make both images permanently visible...
    // } else {
    //   this.setState({ activeImages: [] });
    //   // hide images again...
    // }
  }

  handleClick(component) {
    console.log("handle click", component);
    this.addActiveImage(component);
    // var className = this.state.activeImages.includes(e) ? 'active' : 'inactive'
    // console.log(className);
  }

  addActiveImage(component) {
    this.setState({ activeImages: this.state.activeImages.concat(component) });
    this.applyStyle(component);
  }

  applyStyle(img) {
    // var className = this.state.activeImages.includes(img) ? 'active' : 'inactive'
    // console.log(className);
  }

  render() {
    return (
      <div className="App" style={bodyStyles}>
        <h1 style={h1}>Memory Game</h1>
        <Topics onSubmit={this.onSubmit} />
        <ImageContainer
          handleClick={this.handleClick}
          images={this.state.hits}
          query={this.state.query}
          duplicateHits={this.duplicateHits}
          addActiveImage={this.addActiveImage}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
