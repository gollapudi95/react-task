import React, { useState } from "react";
import Task from './components/TaskList';
import CreateTask from './components/CreateTask';
import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Reactjs Assignment",
      completed: false
    },
  ]);

//create a new task
  const addTask = title => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };
  //removing task based on index
  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  //filtering completed tasks 
  const handleSelectComplete = () => {
    const filterByComplete = tasks.filter((item) => item.completed);
    setTasks(filterByComplete)
  }
  //filtering all tasks
  const handleSelectAll = () => {
    const filterByAll = tasks.filter((item) => item.title);
    setTasks(filterByAll)
  }
  //filtering active tasks
  const handleSelectActive = () => {
    const filterByActive = tasks.filter((item) => !item.completed);
    setTasks(filterByActive)
  }


  return (
    <div className="todo-container">
      <div className="create-task" >
        <CreateTask addTask={addTask} />
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
      <div className="btn-container">
        <button onClick={handleSelectAll} className="button">All</button>
        <button onClick={handleSelectActive} className="button">Active</button>
        <button onClick={handleSelectComplete} className="button">Complete</button>
      </div>
    </div>

  );
};

export default App;