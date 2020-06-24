import React, { useState } from "react";
import AddTask from "./addTask";
import TaskList from "./taskList";

// const x = {
//     id: 0,
//     text: "Lorem0",
//     date: "2020-10-09",
//     important: true,
//     active: false,
//     finishDate: null,
//   }

//   const y = {
//       ...x,
//       active: true
//   }

const Project3 = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Lorem0",
      date: "2020-10-09",
      important: true,
      active: false,
      finishDate: null,
    },
    {
      id: 1,
      text: "Lorem1",
      date: "2021-10-09",
      important: true,
      active: false,
      finishDate: null,
    },
    {
      id: 2,
      text: "Lorem2",
      date: "2022-10-09",
      important: false,
      active: true,
      finishDate: null,
    },
    {
      id: 3,
      text: "Lorem3",
      date: "2023-10-09",
      important: true,
      active: true,
      finishDate: null,
    },
  ]);

  const deleteTask = (id) => {
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
        };
      }
      return task;
    });
    setTasks(arr);
    console.log(arr);
  };
  return (
    <>
      <div>TODO APP</div>
      <AddTask></AddTask>
      <TaskList tasks={tasks} delete={deleteTask} change={changeTaskStatus} />
    </>
  );
};
export default Project3;
