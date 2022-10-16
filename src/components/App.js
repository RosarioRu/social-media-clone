import React from "react";
import Column1 from "./Column1.js";
import Column2 from "./Column2.js";
import Column3 from "./Column3.js";
import Header from "./Header.js";


function App() {
  return (
    <React.Fragment>
      <Header />
      <br/>
      <table class="table">
        <tbody>
          <td>
            <Column1 />
          </td>
          <td>
            <Column2 />
          </td>
          <td>
            <Column3 />
          </td>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default App;