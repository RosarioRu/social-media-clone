import React from "react";
import PropTypes from "prop-types";

function Button(props){

  const buttonStyles = {
    display: "inline-block",
    width: "10%",
    borderRadius: "0",
    border: "0.5px solid rgb(94, 87, 87)",
    marginBottom: "2%",
    h4: {
      fontFamily: "Ariel",
      fontSize: "medium",
      textAlign: "center",
      color: "rgb(94, 87, 87)"
    }
  }

  return (
    <React.Fragment>
      <btn style={buttonStyles} type="button" class="btn btn-outline-info-sm">
        <h4 style={buttonStyles.h4}>{props.buttonText}</h4>
        <h3>{props.key}</h3>
      </btn>
      
    </React.Fragment>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
  key: PropTypes.string,
};

export default Button;