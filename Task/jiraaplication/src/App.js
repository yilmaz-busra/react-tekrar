import { useEffect, useState, useContext } from "react";
import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import TasksContext from "./contextt/task";
function App() {
  const { fetchTasks } = useContext(TasksContext);
  useEffect(() => {
    fetchTasks();
  });

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
