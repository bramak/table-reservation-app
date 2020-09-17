import React from "react";
import Restarauntlisting from "./components/RestarauntListing";
import RestarauntDetails from "./components/RestarauntDetails";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "listing",
    };
  }

  changeRoute = (newRoute) => {
    this.setState({ route: newRoute });
  };

  render() {
    return (
      <div>
        {this.state.route === "listing" && (
          <Restarauntlisting changeRoute={this.changeRoute} />
        )}
        {this.state.route === "details" && <RestarauntDetails />}
      </div>
    );
  }
}

export default App;
