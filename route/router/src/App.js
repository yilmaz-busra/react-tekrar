import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import Mission from "./Components/Mission";
import WrongPath from "./Components/WrongPath";
import History from "./Components/History";
import Company from "./Components/Company";
import Team from "./Components/Team";
import Members from "./Components/Members";
import MemberDetail from "./Components/MemberDetail";

function App() {
  return (
    <div className="App">
      {/* kapsayici ---> Routes  daha sonra icerisinde yonlendirme yaparken gecis yapilacak
   path kismina ne verilirse o url de ne calısacagi elemnet ile belirtilir
   element hangi componentin calısmasını istiyorsak*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/history" element={<History />}>
          {/* ic ice route yazimi */}
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/members" element={<Members />} />
        <Route path="/members/:memberId" element={<MemberDetail />} />

        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
}

export default App;
