import React from "react";
// import "./../Header.modules.css";



function Header() {
  
  const headerStyles = {
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
    <h1 style={headerStyles.h1}>El Face</h1>
    <h3 style={headerStyles.h3}>Test</h3>
    </React.Fragment>
  );
}

export default Header;