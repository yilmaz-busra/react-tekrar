import React from "react";

function TaskCreate() {
  return (
    <div className="task-create">
      <h3>Lütfen Task Ekleyin!</h3>
      <form className="task-form">
        <label className="task-label"> Başlık</label>
        <input />
        <label>Task Girin!</label>
        <textarea />
        <button>Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
