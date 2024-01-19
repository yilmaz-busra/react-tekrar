import "./App.css";
import TaskCreate from "./Components/TaskCreate";

function App() {
  const createTask = (title, taskDesc) => {
    console.log(title, taskDesc);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
    </div>
  );
}

export default App;
