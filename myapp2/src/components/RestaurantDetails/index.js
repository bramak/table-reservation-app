import React from "react";
import Star from "../../images/star.svg";
import Food from "../../images/food.png";
import Tabs from "../../common/Tabs";
import RestaurantDetailPhotos from "./RestaurantDetailPhotos";
import "./style.css";
import { BUSINESS_DETAILS_API } from "../../apiUrls";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RESERVE_TABLE } from "../../actions/reservation";
import {LAST_LOCATION_ROUTE} from "../../actions/routesRedirect";

class RestarauntDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  goToListingPage = () => {
    this.props.changeRoute("listing");
  };

  converttobool = (string) => {
    if (string != undefined) {
      switch (string.toLowerCase().trim()) {
        case "true":
        case "yes":
        case "1":
          return true;
        case "false":
        case "no":
        case "0":
        case null:
          return false;
        default:
          return Boolean(string);
      }
    } else return false;
  };

  OpeningTimings = (string) => {
    if (string != undefined) {
      return string;
    } else return "closed";
  };

  getBusinessDetails = (id) => {
    var a = window.location.pathname;
    var urllength = a.length;
    fetch(
      `${BUSINESS_DETAILS_API}?business_id=${a.substring(
        urllength - 22,
        urllength
      )}`
    )
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
  };

  componentDidMount() {
    this.getBusinessDetails(this.props.id);
  }

  render() {
    var timeexist = true;
    var IsThumbnail = true;
    const { error, isLoaded, items } = this.state;
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
                {(IsThumbnail = item.thumbnail != undefined)}
                {IsThumbnail ? (
                  <img
                    className="headingimage"
                    src={item.thumbnail}
                    alt="loading image please wait"
                  />
                ) : (
                  <img
                    className="headingimage"
                    src={Food}
                    alt="loading image please wait"
                  />
                )}
                <h1>
                  {item.name}{" "}
                  <div className="ratingboxInDetails">
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
                {this.converttobool(item.attributes.RestaurantsReservations) ? (
                   <Link to={`/Restaraunts/Reserve/${item.business_id}`}>
                  <button
                    onClick={() => {this.props.reserveTable(item.business_id)
                      this.props.lastRoute(`/Restaraunts/Reserve/${item.business_id}`)}}
                    className="reserveButton"
                  >
                    Reserve
                  </button>
                  </Link>
                ) : (
                  // </Link>
                  <div></div>
                )}
                <Tabs>
                  <div label="Details">
                    <div className="detailsCategories" border="10">
                      <h3 align="center">{item.categories}</h3>
                    </div>
                    <hr width="80%"></hr>
                    {(timeexist = item.hours != null)}
                    {timeexist ? (
                      <div className="timingOfOpen">
                        <div className="Rtable">
                          <div>
                            <div className="Rtable-cell">Monday</div>
                            <div className="Rtable-cell">
                              {this.OpeningTimings(item.hours.Monday)}
                            </div>
                          </div>
                          <div>
                            <div className="Rtable-cell">Tuesday</div>
                            <div className="Rtable-cell">
                              {this.OpeningTimings(item.hours.Tuesday)}
                            </div>
                          </div>
                          <div>
                            <div className="Rtable-cell">Wednesday</div>
                            <div className="Rtable-cell">
                              {this.OpeningTimings(item.hours.Wednesday)}
                            </div>
                          </div>
                          <div>
                            <div className="Rtable-cell">Thursday</div>
                            <div className="Rtable-cell">
                              {this.OpeningTimings(item.hours.Thursday)}
                            </div>
                          </div>
                          <div>
                            <div className="Rtable-cell">Friday</div>
                            <div className="Rtable-cell">
                              {this.OpeningTimings(item.hours.Friday)}
                            </div>
                          </div>
                          <div>
                            <div className="Rtable-cell">Saturday</div>
                            <div className="Rtable-cell">
                              {this.OpeningTimings(item.hours.Saturday)}
                            </div>
                          </div>
                          <div>
                            <div className="Rtable-cell">Sunday</div>
                            <div className="Rtable-cell">
                              {this.OpeningTimings(item.hours.Sunday)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <div className="centeringdiv">
                      <label className="container">
                        Restaraunt Reservations
                        <input
                          type="checkbox"
                          id="restarauntreservations"
                          checked={this.converttobool(
                            item.attributes.RestaurantsReservations
                          )}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container">
                        Caters
                        <input
                          type="checkbox"
                          id="caters"
                          checked={this.converttobool(item.attributes.Caters)}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container">
                        Table Service
                        <input
                          type="checkbox"
                          id="tableservice"
                          checked={this.converttobool(
                            item.attributes.RestaurantsTableService
                          )}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container">
                        Take Out
                        <input
                          type="checkbox"
                          id="takeout"
                          checked={this.converttobool(
                            item.attributes.RestaurantsTakeOut
                          )}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container">
                        OutdoorSeating
                        <input
                          type="checkbox"
                          id="outdoorseating"
                          checked={this.converttobool(
                            item.attributes.OutdoorSeating
                          )}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container">
                        Bike Parking
                        <input
                          type="checkbox"
                          id="bikeparking"
                          checked={this.converttobool(
                            item.attributes.BikeParking
                          )}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container">
                        Has Tv
                        <input
                          type="checkbox"
                          id="hastv"
                          checked={this.converttobool(item.attributes.HasTV)}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container">
                        Good For Kids
                        <input
                          type="checkbox"
                          id="goodforkids"
                          checked={this.converttobool(
                            item.attributes.GoodForKids
                          )}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container">
                        Good For Groups
                        <input
                          type="checkbox"
                          id="goodforgroups"
                          checked={this.converttobool(
                            item.attributes.RestaurantsGoodForGroups
                          )}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container">
                        Delivery
                        <input
                          type="checkbox"
                          id="delivery"
                          checked={this.converttobool(
                            item.attributes.RestaurantsDelivery
                          )}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>

                  <div label="Photos">
                    <RestaurantDetailPhotos
                      buisnessvalue={item.business_id}
                    ></RestaurantDetailPhotos>
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

const mapStateToProps = (state) => {
  return {
    businessId: state.reservation.businessId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reserveTable: (id) => dispatch({ type: RESERVE_TABLE, businessId: id }),
    lastRoute: (address) =>dispatch({type: LAST_LOCATION_ROUTE, lastRoute: address})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestarauntDetails);
