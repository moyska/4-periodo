import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Artista from "./components/Artista";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Artista">Artista</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Artista" element= {<Artista/>}>
          </Route>
          <Route path="/" element = {<Home/>}>
            
          </Route>

        </Routes>
      </div>

    </Router>
  );
}
export default App;