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
          console.log(data);
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
    console.log(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      items.map((item) => {
        if (item.business_id === props.buisnessvalue)
          return (
            <div>
              <img
                src="https://s3-media2.fl.yelpcdn.com/bphoto/{item.photo_id}/o.jpg"
                alt="{item.caption},{item.label}"
              />
            </div>
          );
      });
    }
  }
}

export default RestarauntDetailPhotos;
