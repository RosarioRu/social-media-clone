import React from "react";

function SearchBox() {
  const searchStyles = {
    display: "inline-block",
    float: "right",
    marginRight: "10%",
    width: "10%",
    borderRadius: "5px",
    border: "2px solid rgb(71, 185, 223)",
    marginBottom: "2%"
  }

  return (
    <input type="search" id="siteSearch" style={searchStyles}></input>
  );
}

export default SearchBox;