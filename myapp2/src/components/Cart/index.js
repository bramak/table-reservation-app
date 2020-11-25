import '../../App.css';
import { connect } from "react-redux";
import React, { Component } from 'react';
import {LAST_LOCATION_ROUTE} from "../../actions/routesRedirect";

class Cart extends Component {

  componentDidMount(){
    this.props.lastRoute(`/Cart`)
  }

  ViewFilters = () => {};

  render() {
    return (
      <div>
          <h1>Cart items to be visible here, also to be added to a dropdown</h1>
          {this.props.items.length ?
    (  
        this.props.items.map(item=>{
            return(
               
                <li key={item.id} >

                               <h2>{item}</h2>
                                
                       </li>                        
            )
        })
    ):

     (
        <h2>Nothing added to the list</h2>
     )}
      </div>
    )
    
  }
}

const mapStateToProps = (state)=>{
  return{
      items: state.cart.Items
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    lastRoute: (address) =>dispatch({type: LAST_LOCATION_ROUTE, lastRoute: address}),
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(Cart);