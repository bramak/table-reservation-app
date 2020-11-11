import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";



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
    const { isLoggingOut, logoutError } = this.props;
    return (
      <div className={styles.outline}>
        <h1>You have sucessfully logged in! Though you really didn't need to</h1>
        <button onClick={this.handleLogout}>Logout</button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}
export default connect(mapStateToProps)(Home);