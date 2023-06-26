import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Terms_of_service from "./Pages/Terms_of_service";
import About from "./Pages/About";
import Privacy_policy from "./Pages/Privacy_policy";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import Insights from "./Pages/Insights";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/Terms_of_service" element={<Terms_of_service />} />
            <Route path="/Privacy_policy" element={<Privacy_policy />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
