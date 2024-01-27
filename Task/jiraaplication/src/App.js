import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import axios from "axios";
function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3004/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [
      ...tasks,
      response.data,
      // {
      //   // yeni array, eyni task
      //   // id: Math.round(Math.random() * 999999),
      //   // title,
      //   // taskDesc,
      // },
    ];
    setTasks(createdTasks);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3004/tasks");
    setTasks(response.data);
  };
  useEffect(() => {
    fetchTasks();
  });

  const deleteTaskById = async (id) => {
    // console.log(id);
    await axios.delete(` http://localhost:3004/tasks/${id}`);
    const afterdeletingTasks = tasks.filter((tasks) => {
      return tasks.id !== id;
    });
    setTasks(afterdeletingTasks);
  };

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    axios.put(` http://localhost:3004/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: id,
          title: updatedTitle,
          taskDesc: updatedTaskDesc,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
