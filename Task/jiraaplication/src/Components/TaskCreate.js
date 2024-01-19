import React, { useState } from "react";

function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState();
  const [taskDesc, setTaskDesc] = useState();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };
  return (
    <div className="task-create">
      <h3>Lütfen Task Ekleyin!</h3>
      <form className="task-form">
        <label className="task-label"> Başlık</label>
        <input value={title} onChange={handleChange} className="task-input" />
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
  );
}

export default TaskCreate;
