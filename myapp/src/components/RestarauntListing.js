import React from 'react';
import Tabs from "./Tabs";
import "./ListStyle.css";
import SideTab from "./SideTab";
import RestarauntList from "./RestarauntListApicall";


class Restarauntlisting extends React.Component{



ViewFilters = () => {
  
}

render (){
  return(
    <div>
   <Tabs> 
     <div label="Restaraunts" className="flex-container">
     <RestarauntList changeRoute={this.props.changeRoute}></RestarauntList>
     <button onClick={this.ViewFilters}>value</button>
     </div>
     <div label="About Us"> 
     info
     </div> 
   </Tabs> 
  </div>)
}


}

export default Restarauntlisting;
