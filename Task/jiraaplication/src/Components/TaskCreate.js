import React, { useContext, useState } from "react";
import TasksContext from "../contextt/task";

function TaskCreate({ task, taskformUpdate, onUpdate }) {
  const { editTaskById, createTask } = useContext(TasksContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
      // editTaskById(task.id, title, taskDesc);
    } else {
      // onCreate(title, taskDesc); => prop olarak gelmediği için TaskShow dosyasından da silindi
      createTask(title, taskDesc);
    }

    setTitle("");
    setTaskDesc("");
  };
  return (
    <div>
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyin!</h3>
          <form className="task-form">
            <label className="task-label"> Başlığı Düzenleyin</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Düzenleyin</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            {/* rows={5} ==> textareanın satir sayisini, yüksekligini ayarlar  */}
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyin!</h3>
          <form className="task-form">
            <label className="task-label"> Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Girin!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            {/* rows={5} ==> textareanın satir sayisini, yüksekligini ayarlar  */}
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
