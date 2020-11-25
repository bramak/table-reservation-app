import { Container, Paper, TextField, Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import {LAST_LOCATION_ROUTE} from "../../actions/routesRedirect";
import {addToCart} from "../../actions/cart";
import {Link} from "react-router-dom";

const styles = () => ({
  outline: {
    marginTop: 150,
    marginBottom: 200,
  },

  paper: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    marginTop: 150,
    marginBottom: 200,
    flexDirection: "column",
    alignItems: "center",
  },

  containerstyle: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    marginTop: 150,
    marginBottom: 200,
    flexDirection: "column",
    alignItems: "center",
  },
});



class ReserveTable extends Component {
  componentDidMount(){
    this.props.lastRoute(`/`)
  }
  handleClick = (id)=>{
    this.props.addToCart(id); 
  }
  render() {
    return (
      <div className={styles.outline}>
        <h1>Confirm your reservation</h1>
        <Container className={styles.containerstyle}>
          <Paper className={styles.paper}>
            <TextField
              disabled
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              label="RestarauntID"
              fullWidth
              defaultValue={this.props.businessId}
              variant="filled"
            ></TextField>
            <TextField
              disabled
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              label="Number of guests"
              
              defaultValue={this.props.guestCount}
              variant="filled"
            ></TextField>
            <Button type="button" fullWidth variant="contained" color="primary">
              Confirm
            </Button>
            {console.log(this.props.businessId)}
            <Button type="button" fullWidth variant="contained" onClick={()=>{this.handleClick(this.props.businessId)}} color="secondary">
              Add to list
            </Button>
            <Link to="/Cart">
            <Button type="button" fullWidth variant="contained" color="primary">
              Go to Reservation List
            </Button></Link>
          </Paper>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
    businessId: state.reservation.businessId,
    guestCount: state.reservation.guestCount,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    lastRoute: (address) =>dispatch({type: LAST_LOCATION_ROUTE, lastRoute: address}),
    addToCart: (id)=>{dispatch(addToCart(id))},
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ReserveTable);
