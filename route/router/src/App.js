import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <div className="App">
      {/* kapsayici ---> Routes  daha sonra icerisinde yonlendirme yaparken gecis yapilacak
   
   element hangi componentin calısmasını istiyorsak*/}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
