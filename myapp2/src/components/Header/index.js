import "../../App.css";
import FoodIcon from "../../images/hamburger.ico";
import React, { Component } from "react";
import { connect } from "react-redux";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
/*
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

*/
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
