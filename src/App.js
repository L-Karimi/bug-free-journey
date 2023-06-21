import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div>
        ReactDOM.render(
        <Router>
          <Navbar />
          {/* Other components and content */}
        </Router>
        , document.getElementById("root")
      </div>
      );
    </>
  );
}

export default App;
