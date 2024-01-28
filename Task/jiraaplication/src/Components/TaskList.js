import React, { useContext } from "react";
import TaskShow from "./TaskShow";
import TasksContext from "../contextt/task";

function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <div className="task-list">
      {tasks.map((duty, index) => {
        return <TaskShow key={index} task={duty} />;
      })}
    </div>
  );
}

export default TaskList;
