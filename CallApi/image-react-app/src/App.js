import SearchImage from "./Api";
import Header from "./Header";
import "./App.css";
import { useState } from "react";
import ImageList from "./Components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (x) => {
    console.log(x);
    const result = await SearchImage(x);
    console.log(result);
    setImages(result);
  };
  return (
    <div className="App">
      <Header search={handleSubmit} />
      <ImageList placeholderImage={images} />
    </div>
  );
}

export default App;
