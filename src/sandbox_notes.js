// Need to pass the query (defined by a click event on input) [DONE]
// Pass query to the fetch method [DONE]

// The fetching component should be a common parent component for all these components. [DONE]
// The loading indicator could be shown in the common parent component from the first criteria.
// The componentDidMount() lifecycle method is the best place to fetch data. [DONE]

// Parent container (need to store an array of data from fetch function) [DONE]

// Topics component [DONE]
  // input (onChange event determines query value, and click event will call the fetch method, passing along the query) [DONE]
  // (future feature:)  pre-defined buttons (click event determines query value... will need to refactor) [DONE]

// Image container component
// images (data array item : src, author name author src, unsplash) [DONE]

// Need to figure out how I can prevent child component (image container, images) from rendering until the data is present in state. [DONE]
// Have basic intro with input, route user to url with input url?? [STILL DECIDING WHETHER NECESSARY]

  // handleClick(e) {
  //   e.preventDefault();
  //   const img = this.props.src;
  //   console.log(this.state);
  //   this.setState({ active: true });
  //   this.props.addActiveImage(this.props.id);
  //   this.props.compare();
  // }

  // click event is only firing when state active is already set to true...
  // ...because the click event was set on img, which doesn't display when active: false

// Move parent div to imageContainer, inside for loop. pass in img style IF IF IF image is in state.activeImages array. Somehow have to loop through that array??

// addActiveImage(obj) {
//   this.setState({ activeImages: this.state.activeImages.concat(obj) });
//   this.applyStyle(obj);
//   // function
//   // this.state.activeImages.length > 1 ? this.compareImages() : return;
//   // }
// }
// // bryan's function
// // compareImages() {

// // }

compareActiveImages() {
  console.log('function was triggered');
  if (this.state.activeImages.length === 2 ) {
    console.log('that is two')
    if (
      this.state.activeImages[0].props.id === this.state.activeImages[1].props.id
    ) {
      console.log("it's a match!!");
      // somehow make both images permanently visible...
    } else {
      this.setState({ activeImages: [] });
      // hide images again...
    }
  }

  else {
    console.log('either less than two, orrrr the equals 2 logic is off');
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


// Aug 17 //
//issues with ImageContainer state activeImages array, compare method:
  // 1. addActiveImage method doesn't fire until second image is clicked
  // 2. need to figure out how to test whether Image object exists in activeImages array
    // current method (which doesn't work) printed as prop on Image component:
      // imgStyle={this.state.activeImages.includes(img) ? imgActive : imgInactive }

