import React from "react";
import { connect } from "react-redux";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { RESERVE_TABLE } from "../../../actions/reservation";
import { LAST_LOCATION_ROUTE } from "../../../actions/routesRedirect";
import IconDropdownActive from "../iconActive";
import IconDropdown from "../../../images/icondesign.png";

class DropDownKart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dataitems: [],
    };
  }

  componentDidMount() {
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

  render() {
    const { error, isLoaded, dataitems } = this.state;
    var isSame = true;
    return (
      <div class={Styles.dropdown}>
        <button class={Styles.dropButton}>
          {this.props.items.length ? (
            //  <img src={CartIconActive} width="60px"height="50px"/>
            <IconDropdownActive></IconDropdownActive>
          ) : (
            <img src={IconDropdown} />
          )}
        </button>
        <div class={Styles.dropContent}>
          {this.props.items.map((item) => {
            return (
              <ul>
                <li key={item.id}>
                  <a href="#">
                    {dataitems.map((dataitem, index) => (
                      <li key={index} id="restaraunts">
                        {(isSame = dataitem.business_id == item)}
                        {isSame ? (<Link to={`/Restaraunts/Reserve/${item}`}><button onClick={() => {this.props.reserveTable(item)
                this.props.lastRoute(`/Restaraunts/Reserve/${item}`)}}><div>
                          {dataitem.name}
                          <img src={dataitem.thumbnail} width="200" height="150"/>
                          </div></button></Link>
                        ) : null}
                      </li>
                    ))}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DropDownKart);
