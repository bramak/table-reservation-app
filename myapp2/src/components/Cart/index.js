import React from "react";
import { connect } from "react-redux";
import {LAST_LOCATION_ROUTE} from "../../actions/routesRedirect";

class Cart extends React.Component {

  componentDidMount(){
    this.props.lastRoute(`/Cart`)
  }

  ViewFilters = () => {};

  render() {
    return (
      <div>
          <h1>Cart items to be visible here, also to be added to a dropdown</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    lastRoute: (address) =>dispatch({type: LAST_LOCATION_ROUTE, lastRoute: address}),
  };
};


export default connect(null,mapDispatchToProps)(Cart);