import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../burger-project/src/Components/Home";

import Contact from "../../burger-project/src/Components/Contact";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
