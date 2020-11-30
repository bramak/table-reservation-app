import React from "react";
import { connect } from "react-redux";
import CartIconActiveMark from "../../images/icondesignactive.png";
import {Link} from "react-router-dom";
import { RESERVE_TABLE } from "../../actions/reservation";



class IconDropdownActive extends React.Component {
  render() {

    const Styles = {

        container: {
            position: "relative",
            textAlign: "center",
            color: "black",
          },
          
          
          bottomLeft: {
            position: "absolute",
            top: 4,
            right: 9,
          },

    };

    return (
        
            <div style={Styles.container}>
         
                    <img src={CartIconActiveMark}/>
                  <div style={Styles.bottomLeft}>
                   {this.props.items.length}</div>

        
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
      reserveTable: (id) => dispatch({ type: RESERVE_TABLE, businessId: id }),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(IconDropdownActive);
