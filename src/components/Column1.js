import React from "react";


function Column1() {

  const columnStyles = {
    border: "solid black 2px",
    display: "inline-block",
    width: "33%",
    textAlign: "Center"
  }

  return(
    <h3 style={columnStyles}>Column 1</h3>
  );
}

export default Column1;