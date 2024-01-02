import "./App.css";
import { useState } from "react";
function App() {
  // value güncellenecek degisken
  // value un baslangic degeri usestate() icindeki yazilan deger
  // setvalue bir fonksiyon, value yu set ediyor, value degeri degisiyor
  const [value, setvalue] = useState(0);

  const handleclick = () => {
    setvalue(value + 1);
  };
  return (
    <div className="App">
      <button onClick={handleclick}> Kurs Ekle</button>
      <div>Kurs Sayisi: {value}</div>
    </div>
  );
}

export default App;
