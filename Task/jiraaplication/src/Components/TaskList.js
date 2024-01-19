import React from "react";
import TaskShow from "./TaskShow";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((duty, index) => {
        return <TaskShow key={index} task={duty} />;
      })}
    </div>
  );
}

export default TaskList;
