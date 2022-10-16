import React from "react";
import LinkButtons from "./LinkButtons.js";
// import "./../Header.modules.css";



function Header() {
  
  const headerStyles = {
    border: "2px solid green",
    paddingLeft: "2%",
    paddingRight: "2%",
    h1: {
      textAlign: "center",
      fontFamily: "comic 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
      color: "rgb(144, 136, 136)"
    },
    h3: {
      textAlign: "center"
    }
  }
  return(
    <React.Fragment>
      <div style={headerStyles}>
        <h1 style={headerStyles.h1}>El Face</h1>
        {/* <h3 style={headerStyles.h3}>Test</h3> */}
        <LinkButtons />
        
      </div>
    </React.Fragment>
  );
}

export default Header;