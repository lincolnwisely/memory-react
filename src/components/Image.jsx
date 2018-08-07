import React from 'react';


class Image extends Component {

  render() {
    const { imgs } = this.props.images;
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
  // const Baskets = ({baskets}) => {
  // const dateList = baskets.map((basket) => {
  //     return (
  //       <li
  //           key={basket.id}>{basket.formatted_date}
  //       </li>
  //     )
  //   });
  // return (
  //     <div className="list-group-item">
  //       <h4>Shopping Trip Index</h4>
  //       <div className="list-group">{dateList}</div>
  //     </div>
  //   );
  // };
  
  
  

}

export default Image;