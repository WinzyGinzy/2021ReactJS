import "./App.css";
import { useState } from "react";
import Header from "./Header/Header";
import TaskBar from "./Components/TaskBar";
import TaskForm from "./Components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        task: userInput,
        complete: false,
      };
      setTasks([...tasks, newItem]);
    }
  };
  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };
  const toggleHandler = (id) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : { ...task }
      ),
    ]);
  };

  return (
    <>
      <Header numberOfTasks={tasks.length} />
      <TaskBar addTask={addTask} />
      {tasks.map((task) => {
        return (
          <TaskForm
            key={task.id}
            toDoTask={task.task}
            toDoID={task.id}
            toDoComplete={task.complete}
            toggleTask={toggleHandler}
            deleteTask={deleteTask}
          />
        );
      })}
    </>
  );
}

export default App;
