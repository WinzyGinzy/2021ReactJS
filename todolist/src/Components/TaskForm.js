import React from "react";

const TaskForm = ({
  toDoTask,
  toDoID,
  toDoComplete,
  toggleTask,
  deleteTask,
}) => {
  return (
    <div key={toDoID} className="task-list">
      <div
        className={toDoComplete ? "item-text cross-out" : "item-text"}
        onClick={() => toggleTask(toDoID)}
      >
        {toDoTask}
      </div>

      <span className="delete-button" onClick={() => deleteTask(toDoID)}>
        🗑️
      </span>
    </div>
  );
};

export default TaskForm;
