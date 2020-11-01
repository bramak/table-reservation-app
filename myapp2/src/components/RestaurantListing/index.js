import React from "react";
import Styles from "./style.module.css";
import List from "./List";

console.log(Styles);
class Restarauntlisting extends React.Component {
  ViewFilters = () => {};

  render() {
    return (
      <div>
          <div label="Restaraunts" className={Styles.flexContainer}>
            <List/>
          </div>
      </div>
    );
  }
}

export default Restarauntlisting;
