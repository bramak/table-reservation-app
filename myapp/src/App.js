import React from "react";
import RestaurantListing from "./components/RestaurantListing";
import RestaurantDetails from "./components/RestaurantDetails";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "listing",
      activeBusiness: null,
    };
  }

  changeRoute = (newRoute) => {
    this.setState({ route: newRoute });
  };

  componentWillUpdate(nextProps, nextState) {
    const newBusiness = nextState.activeBusiness;
    if (newBusiness !== null && this.state.activeBusiness !== newBusiness) {
      this.setState({ route: "details" });
    }
  }

  setActiveBusiness = (id) => {
    this.setState({ activeBusiness: id });
  };

  render() {
    return (
      <div>
        {this.state.route === "listing" && (
          <RestaurantListing onClickBusiness={this.setActiveBusiness} />
        )}
        {this.state.route === "details" && (
          <RestaurantDetails
            id={this.state.activeBusiness}
            changeRoute={this.changeRoute}
          />
        )}
      </div>
    );
  }
}

export default App;
