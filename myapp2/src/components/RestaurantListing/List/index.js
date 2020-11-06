import React from "react";
import Styles from "../style.module.css";
import Star from "../../../images/star.svg";
import Food from "../../../images/food.png";
import { BUSINESS_DETAILS_API } from "../../../apiUrls";
import {Link} from "react-router-dom";

console.log(Star);

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(BUSINESS_DETAILS_API)
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
    var IsThumbnail = true;
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className={Styles.flexContainer}>
          {items.map((item, index) => (
            <li key={index}>
              <div className="tile">
                <div className={Styles.mainbox}>
                  <div className={Styles.imgclassName}>
                    {IsThumbnail= item.thumbnail!=undefined}
                    {IsThumbnail?(
                    <img
                      className={Styles.image}
                      src={item.thumbnail}
                      alt={item.name}
                    />):(<div>
                      <img
                      className={Styles.image}
                      src={Food}
                      alt={item.name}
                    />
                    </div>)}
                  </div>
                  <div className={Styles.overlay}></div>
                  <div className={Styles.buttonoverlay}>
                    <div className={Styles.restname}>{item.name}</div>
                    <div className={Styles.ratingbox}>
                      <img src={Star} width="16" height="16" /> {item.stars}
                    </div>
                  </div>
                </div>

                <div className={Styles.bottommain}>
                  <Link to={`/Restaraunts/${item.business_id}`}>
                  <button
                    className={Styles.button}
                  >
                    View Details
                  </button></Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default List;
