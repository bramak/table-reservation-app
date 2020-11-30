import "../../App.css";
import { connect } from "react-redux";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import { LAST_LOCATION_ROUTE } from "../../actions/routesRedirect";
import { RESERVE_TABLE } from "../../actions/reservation";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dataitems: [],
    };
  }

  componentDidMount() {
    this.props.lastRoute(`/Cart`);
    fetch("http://localhost:3001/business")
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            dataitems: data,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  ViewFilters = () => {};

  render() {
    const { error, isLoaded, dataitems } = this.state;
    var isSame = true;
    return (
      <div>
        {this.props.items.length ? (
          this.props.items.map((item) => {
            return (
              <ul style={{textAlign: "center", padding:"auto"}}><Link to={`/Restaraunts/Reserve/${item}`}><button  onClick={() => {this.props.reserveTable(item)
                this.props.lastRoute(`/Restaraunts/Reserve/${item}`)}} style={{display: "flex",flexWrap: "wrap", float:"left", position: "inline",width:300}}>
                <li key={item.id} style={{display:"inline-block"} }>
                  <h2>
                    {dataitems.map((dataitem, index) => (
                      <li key={index} id="restaraunts" >
                        {(isSame = dataitem.business_id == item)}
                        {isSame ? (<span style={{textAlign:"center"}}>
                          {dataitem.name}<div>
                          <img style={{borderRadius:25}}
                            src={dataitem.thumbnail}
                            alt={dataitem.caption} width="200" height="150"
                          /></div></span>
                        ) : null}
                      </li>
                    ))}
                  </h2>
                </li></button></Link>
              </ul>
            );
          })
        ) : (
          <h2>Nothing added here! Look at the restaruants and go ahead if you want to reserve</h2>
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
