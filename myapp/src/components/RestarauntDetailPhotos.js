import React from "react";
import "./DetailsStyle.css";

class RestarauntDetailPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/photos")
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            items: data,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    var isSame = true;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      {
        /*console.log(item.business_id);
      

      if (item.business_id == this.props.buisnessvalue)*/
      }
      return (
        <ul className="flex-container">
          {items.map((item, index) => (
            <li key={index} id="restaraunts">
              {(isSame = item.business_id == this.props.buisnessvalue)}
              {isSame ? (
                <div>
                  <div id="photos" class="cards">
                    <img
                      src={`https://s3-media2.fl.yelpcdn.com/bphoto/${item.photo_id}/o.jpg`}
                      alt={item.caption}
                    />
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </li>
          ))}
        </ul>
      );

      //});
    }
  }
}

export default RestarauntDetailPhotos;
