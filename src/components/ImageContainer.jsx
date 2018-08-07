import React from 'react';

class ImageContainer extends Component {

  // render() {
  //   return (
  //     <div style={flexStyle}>
  //       {/* <Image source={this.props.images } images={this.props.images} /> */}
  //     </div>
  //   )
  // }

  render() {
    const { imgs } = this.props.images;
    console.log(this.props.images)
      return (
        <div>
        {imgs.map(img =>
          <div id={img.objectID}>
            <img src={img.urls.small}/>
            <p class="credit"><a href="https://unsplash.com/" target="_blank">via Unsplash</a><br/>
            <a href={img.user.links.self} target="_blank">{ img.hits.user.name }</a></p>
          </div>
        )}
      </div>
      );
  }
}
  

export default ImageContainer;