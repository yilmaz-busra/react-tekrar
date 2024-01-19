import { useState } from "react";
import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        // yeni array, eyni task
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    // console.log(id);
    const afterdeletingTasks = tasks.filter((tasks) => {
      return tasks.id !== id;
    });
    setTasks(afterdeletingTasks);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}

export default App;
