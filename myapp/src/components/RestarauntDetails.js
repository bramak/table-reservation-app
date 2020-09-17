import React from "react";
import Star from "./star.svg";
import Tabs from "./Tabs";
//import RestarauntDetailPhotos from "./RestarauntDetailPhotos";
import "./DetailsStyle.css";

class RestarauntDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/business?business_id=QXAEGFB4oINsVuTFxEYKFQ")
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
        <ul>
          {items.map((item, index) => (
            <li key={index} id="restaraunts">
              <div>
                <title>{item.name}</title>
                <img
                  className="headingimage"
                  src={item.thumbnail}
                  alt="loading image please wait"
                />
                <h1>
                  {item.name}
                  <div className="ratingbox">
                    <img src={Star} width="16" height="16" /> {item.stars}
                  </div>
                </h1>
                <h2>
                  {item.address}
                  <br />
                  {item.city}
                  <br />
                  {item.state}
                  <br />
                  {item.postal_code}
                </h2>

                <Tabs>
                  <div label="Details">
                    <div className="detailsCategories" border="10">
                      <h3 align="center">{item.categories}</h3>
                    </div>
                    <hr width="80%"></hr>
                    <div className="timingOfOpen">
                      <div class="Rtable">
                        <div>
                          <div class="Rtable-cell">Monday</div>
                          <div class="Rtable-cell">{item.hours.Monday}</div>
                        </div>
                        <div>
                          <div class="Rtable-cell">Tuesday</div>
                          <div class="Rtable-cell">{item.hours.Tuesday}</div>
                        </div>
                        <div>
                          <div class="Rtable-cell">Wednesday</div>
                          <div class="Rtable-cell">{item.hours.Wednesday}</div>
                        </div>
                        <div>
                          <div class="Rtable-cell">Thursday</div>
                          <div class="Rtable-cell">{item.hours.Thursday}</div>
                        </div>
                        <div>
                          <div class="Rtable-cell">Friday</div>
                          <div class="Rtable-cell">{item.hours.Friday}</div>
                        </div>
                        <div>
                          <div class="Rtable-cell">Saturday</div>
                          <div class="Rtable-cell">{item.hours.Saturday}</div>
                        </div>
                        <div>
                          <div class="Rtable-cell">Sunday</div>
                          <div class="Rtable-cell">{item.hours.Sunday}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div label="Photos">
                    {/*<RestarauntDetailPhotos buisnessvalue={item.business_id}></RestarauntDetailPhotos> */}
                  </div>
                  <div label="Reviews">
                    {item.review_count}
                    reviews
                  </div>
                </Tabs>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default RestarauntDetails;
