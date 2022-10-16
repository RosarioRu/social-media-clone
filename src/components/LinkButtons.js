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
  return (
    <React.Fragment>
      {buttonList.map((button, index) =>
        <Button 
          buttonText={button.buttonText}
          key= {index}
        />
      )}
    </React.Fragment>
  );
}

export default LinkButtons;
