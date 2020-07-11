import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/Input";
import Task from "./components/Task";

function App() {
  const [task, setTask] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = { taskDetails: task };
    setTaskList([...taskList, newTask]);
    setTask("");
  };

  const changeTextStyle = (v, i) => {
    const temp = [...taskList];
    temp[i].fontStyle = v ? "line-through" : "";
    setTaskList(temp);
  };

  const deleteTask = (i) => {
    const temp = [...taskList];
    temp.splice(i, 1);
    setTaskList(temp);
  };

  return (
    <div className="App">
      <Input
        handleSubmit={addNewTask}
        handleInput={setTask}
        valueInput={task}
      />

      <Task
        list={taskList}
        handleCheckbox={changeTextStyle}
        handleDelete={deleteTask}
      />
    </div>
  );
}

export default App;
