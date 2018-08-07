import React from "react";

class Image extends React.Component {
  // const { imgs } = this.props.images;

  render() {
    return (
      <div>
        {this.props.images.map(img => (
          <div key={img.id}>
            <img src={img.urls.small} alt="alt text" />
            <p className="credit">
              <a
                href="https://unsplash.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                via Unsplash
              </a>
              <br />
              <a
                href={img.user.links.self}
                target="_blank"
                rel="noopener noreferrer"
              >
                {img.user.name}
              </a>
            </p>
          </div>
        ))}
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
