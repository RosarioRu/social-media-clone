import React from "react";
import Button from "./Button";


const buttonList = [
  {
    buttonText: "Home"
  },
  {
    buttonText: "Notifications"
  },
  {
    buttonText: "Messages"
  }
];

function LinkButtons() {

  const buttonStyles = {
    boxSizing: "border-box",
    border: "2px solid black"
  }

  return (
    <React.Fragment>
      {buttonList.map((button, index) =>
        <Button style={buttonStyles}
          buttonText={button.buttonText}
          key={button.index}
        />
      )}
    </React.Fragment>
  );
}
