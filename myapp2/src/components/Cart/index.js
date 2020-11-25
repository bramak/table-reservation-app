import "../../App.css";
import { connect } from "react-redux";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import { LAST_LOCATION_ROUTE } from "../../actions/routesRedirect";
import { RESERVE_TABLE } from "../../actions/reservation";

class Cart extends Component {
  componentDidMount() {
    this.props.lastRoute(`/Cart`);
  }

  ViewFilters = () => {};

  render() {
    return (
      <div>
        <h1>Cart items to be visible here, also to be added to a dropdown</h1>
        {this.props.items.length ? (
          this.props.items.map((item) => {
            return (
              <ul>
                <li key={item.id}>
                  <h2>
                  <Link to={`/Restaraunts/Reserve/${item}`}>
                    <button onClick={() => {this.props.reserveTable(item)
                      this.props.lastRoute(`/Restaraunts/Reserve/${item}`)}}>{item}</button></Link>
                  </h2>
                </li>
              </ul>
            );
          })
        ) : (
          <h2>Nothing added to the list</h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.Items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    lastRoute: (address) =>
      dispatch({ type: LAST_LOCATION_ROUTE, lastRoute: address }),
    reserveTable: (id) => dispatch({ type: RESERVE_TABLE, businessId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
