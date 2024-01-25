import React from "react";
import TaskShow from "./TaskShow";

function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="task-list">
      {tasks.map((duty, index) => {
        return (
          <TaskShow
            key={index}
            task={duty}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
