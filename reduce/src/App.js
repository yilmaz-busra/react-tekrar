import "./App.css";
import { redurcer, useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      <div>Sayi = {count} </div>

      <button onClick={() => dispatch("increment")}>Arttır</button>
      <button onClick={() => dispatch("decrement")}>Azalt</button>
      <button onClick={() => dispatch("reset")}>Sıfırla</button>
    </div>
  );
}

export default App;
