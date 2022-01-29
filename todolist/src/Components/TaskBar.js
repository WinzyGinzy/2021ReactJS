import React from "react";

import { useState } from "react";

const TaskBar = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handlePress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your note"
        onChange={handleChange}
        onKeyDown={handlePress}
        value={userInput}
      />
      <button>Add</button>
    </form>
  );
};

export default TaskBar;
