import React from "react";
import Tabs from "../../common/Tabs";
import Styles from "./style.module.css";
import List from "./List";

console.log(Styles);
class Restarauntlisting extends React.Component {
  ViewFilters = () => {};

  render() {
    return (
      <div>
        <Tabs>
          <div label="Restaraunts" className={Styles.flexContainer}>
            <List onClickBusiness={this.props.onClickBusiness} />
          </div>
          <div label="About Us">info</div>
        </Tabs>
      </div>
    );
  }
}

export default Restarauntlisting;
