import React from "react";
import Column1 from "./Column1.js";
import Column2 from "./Column2.js";
import Column3 from "./Column3.js";


import Header from "./Header.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Column1 />
      <Column2 />
      <Column3 />
    </React.Fragment>
  );
}

export default App;