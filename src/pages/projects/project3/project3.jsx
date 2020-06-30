import React, { useState } from "react";
import AddTask from "./addTask";
import TaskList from "./taskList";

const Project3 = () => {
  const [tasks, setTasks] = useState([]);

  const removeTask = (id) => {
    console.log("delete id" + id);
    const listWihoutSelectedElement = tasks.filter((task) => task.id !== id);

    setTasks(listWihoutSelectedElement);
  };

  const changeTaskStatus = (id) => {
    console.log("change id" + id);

    const arr = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          active: !task.active,
          finishDate: new Date().getTime(),
        };
      }
      return task;
    });
    setTasks(arr);
    console.log(arr);
  };



  const addTask = (text, date, check) => {
    const getLastElementId = () => {
      if (tasks.length) {
        const lastElementId = tasks[tasks.length - 1].id;
        return lastElementId + 1;
      }
      return 0;
    };
    console.log("add array");
    const task = {
      id: getLastElementId(),
      text: text,
      date: date,
      important: check,
      active: true,
      finishDate: null,
    };

    console.log(task);
    setTasks([...tasks, task]);

    return true;
  };
  return (
    <>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} remove={removeTask} change={changeTaskStatus} />
    </>
  );
};
export default Project3;
