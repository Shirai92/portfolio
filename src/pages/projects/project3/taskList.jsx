import React from "react";
import Task from "./task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active === true);
  active.sort((a, b) => b.important - a.important);

  const done = props.tasks.filter((task) => {
    return task.active === false;
  });
  done.sort((a, b) => b.finishDate - a.finishDate);

  const renderTasks = (tasks) => {
    return tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        remove={props.remove}
        change={props.change}
      />
    ));
  };

  return (
    <>
      <ActiveTasksList data={renderTasks(active)} />
      <hr />
      <DoneTasksList data={renderTasks(done)} />
    </>
  );
};

const ActiveTasksList = (props) => {
  const { data } = props;

  return (
    <div>
      <h1>Task to be done</h1>
      {data.length > 0 ? data : <p>No tasks to be done</p>}
    </div>
  );
};

const DoneTasksList = (props) => {
  const { data } = props;

  return (
    <div>
      <h3>
        Task done<em> ({data.length})</em>
      </h3>
      {data}
    </div>
  );
};

export default TaskList;
