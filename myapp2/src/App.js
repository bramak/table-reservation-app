import './App.css';
import Header from "./components/Header";
import Aboutpage from "./components/Aboutpage";
import RestarauntListing from "./components/RestaurantListing";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/About" exact component={Aboutpage}/>
      <Route path="/Lists" exact component={RestarauntListing}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Enter Page</h1>
  </div>
)

export default App;
