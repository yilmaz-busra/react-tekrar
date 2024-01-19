import React from "react";
import TaskShow from "./TaskShow";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="task-list">
      {tasks.map((duty, index) => {
        return <TaskShow key={index} task={duty} onDelete={onDelete} />;
      })}
    </div>
  );
}

export default TaskList;
