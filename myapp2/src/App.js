import './App.css';
import Header from "./components/Header";
import Aboutpage from "./components/Aboutpage";
import RestarauntListing from "./components/RestaurantListing";
import RestrauntDetails from "./components/RestaurantDetails";
import ReserveTable from "./components/ReserveTable";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
      <Route
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
      <Route path="/About" exact component={Aboutpage}/>
      <Route path="/Restaraunts" exact component={RestarauntListing}/>
      <ProtectedRoute
      path="/Restaraunts/Reserve/:buisnessId" component={ReserveTable}
      isAuthenticated={isAuthenticated}
      isVerifying={isVerifying}
      />
      <Route path="/Restaraunts/:buisnessId" component={RestrauntDetails}/>
      </Switch>
    </div>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}



export default connect(mapStateToProps)(App);
