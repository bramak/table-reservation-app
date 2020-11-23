import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import { Link } from 'react-router-dom'



const styles = () => ({

  outline: {
    marginTop: 150,
    marginBottom: 200,
  }

})


class Home extends Component {

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    const { isLoggingOut, logoutError, isAuthenticated } = this.props;
    return (
      <div className={styles.outline}>
        <h1>Welcome to the site</h1>
        {
          isAuthenticated? (<h2>
        <button onClick={this.handleLogout}>Logout</button></h2>
        ):(<div>
          
          <h2>Login to reserve seats</h2><h2>
          <Link to="/login">
        <button>Login</button>
      </Link></h2></div>)}
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
export default connect(mapStateToProps)(Home);