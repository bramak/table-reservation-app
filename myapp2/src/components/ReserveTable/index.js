import { Container, Paper, TextField, Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";

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

export default connect(mapStateToProps)(ReserveTable);
