import "../../App.css";
import FoodIcon from "../../images/hamburger.ico";
import React, { Component } from "react";
import { connect } from "react-redux";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions";

class Header extends Component {

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    return (
      <div>
        <div className={Styles.container}>
          {/*
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg"
        className={Styles.homePageImage}
      /> 
      <div class={Styles.centered}><a href="#siteMain"><button className={Styles.button}>Welcome</button></a></div>*/}
        </div>
        <nav className={Styles.navbar} id="siteMain">
          <Link Style="color:white;" to="/">
            Home
          </Link>
          <Link Style="color:white;" to="/Restaraunts">
            Restaraunts
          </Link>
          <Link Style="color:white;" to="/About">
            About
          </Link>

          {this.props.isAuthenticated ? (
            <div>Cart</div>
        
          ) : (
            <div>
              {" "}
              <Link Style="color:white;" to="/login">
                <button>Login</button>
              </Link>
            </div>
          )}
          {this.props.isAuthenticated?(<button onClick={this.handleLogout}>Logout</button>):(null)}
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
  };
}

export default connect(mapStateToProps)(Header);
