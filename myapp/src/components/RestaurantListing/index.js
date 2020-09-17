import React from "react";
import Tabs from "../../common/Tabs";
import Styles from "./style.module.css";
import List from "./List";

console.log(Styles);
class Restarauntlisting extends React.Component {
  ViewFilters = () => {};

  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  render() {
    return (
      <div>
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onclick={this.closeNav}>
            &times;
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <span onclick={this.openNav}>&#9776; open</span>
        <Tabs>
          <div label="Restaraunts" className={Styles.flexContainer}>
            <List onClickBusiness={this.props.onClickBusiness} />
            <button onClick={this.ViewFilters}>value</button>
          </div>
          <div label="About Us">info</div>
        </Tabs>
      </div>
    );
  }
}

export default Restarauntlisting;
