import React from "react";
import Styles from "./ListStyle.module.css";
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
    var url="";
    const { error, isLoaded, items } = this.state;
    console.log(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className={Styles.flexContainer}>
          {items.map((item,index) => <li key={index}>
            {(url=item.buisness_id)}
          <div className="tile">
                  <div className={Styles.mainbox}>
                  <div className={Styles.imgclassName}><img className={Styles.image} src={item.thumbnail} alt={item.name} /></div>
                  <div className={Styles.overlay}></div>
                  <div className={Styles.buttonoverlay}>
                  <div className={Styles.restname}>{item.name}</div>
                  <div className={Styles.ratingbox}>
                  <img src={Star} width="16" height="16" /> {item.stars}
                  </div>
                  </div>
                  </div>
                  
                  <div className={Styles.bottommain}>
                  <button onClick={this.goToDetailsPage} className={Styles.button}>View Details</button></div>
                  
          </div>
          </li>) }
        </ul>
      );
    }
  }
}

export default RestarauntList;
