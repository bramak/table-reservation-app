import React from "react";
import Styles from "./style.module.css";
import List from "./List";
import { connect } from "react-redux";
import {LAST_LOCATION_ROUTE} from "../../actions/routesRedirect";

console.log(Styles);
class Restarauntlisting extends React.Component {

  componentDidMount(){
    this.props.lastRoute(`/Restaraunts`)
  }

  ViewFilters = () => {};

  render() {
    return (
      <div>
          <div label="Restaraunts" className={Styles.flexContainer}>
            <List/>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    lastRoute: (address) =>dispatch({type: LAST_LOCATION_ROUTE, lastRoute: address}),
  };
};


export default connect(null,mapDispatchToProps)(Restarauntlisting);
