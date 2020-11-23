import React from "react";
import { connect } from "react-redux";
import {LAST_LOCATION_ROUTE} from "../../actions/routesRedirect";

class Aboutpage extends React.Component {

  componentDidMount(){
    this.props.lastRoute(`/About`)
  }

  ViewFilters = () => {};

  render() {
    return (
      <div>
          <h1>About</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    lastRoute: (address) =>dispatch({type: LAST_LOCATION_ROUTE, lastRoute: address}),
  };
};


export default connect(null,mapDispatchToProps)(Aboutpage);