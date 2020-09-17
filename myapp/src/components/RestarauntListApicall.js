import React from "react";
import "./ListStyle.css";
import Star from "./star.svg";
import Food from "./food.png";

console.log(Star);

class RestarauntList extends React.Component {

  
  goToDetailsPage = () => {
    console.log(this.props);
    this.props.changeRoute("details");
    }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  

  componentDidMount() {
    fetch("http://localhost:3001/business")
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
      return (
        <ul className="flex-container">
          {items.map((item,index) => <li key={index} id="restaraunts">
          <div className="tile">
                  <div className="mainbox">
                  <div className="imgclassName"><img className="image" src={item.thumbnail} alt={item.name} /></div>
                  <div className="overlay"></div>
                  <div className="buttonoverlay">
                  <div className="restname">{item.name}</div>
                  <div className="ratingbox">
                  <img src={Star} width="16" height="16" /> {item.stars}
                  </div>
                  </div>
                  </div>
                  
                  <div className="bottommain">
                  <button onClick={this.goToDetailsPage} className="button">View Details</button></div>
                  
          </div>
          </li>) }
        </ul>
      );
    }
  }
}

export default RestarauntList;
