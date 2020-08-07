import React from "react";

const Task = (props) => {
  const { task, change, remove } = props;
  const { active } = task;

  return active ? (
    <ActiveTask task={props.task} change={change} remove={remove} />
  ) : (
    <DoneTask task={props.task} change={change} remove={remove} />
  );
};

const ActiveTask = (props) => {
  const { task, change, remove } = props;
  const { id, text, date, important } = task;
  const redColor = { color: "red" };

  return (
    <div>
      <p>
        <strong style={important ? redColor : null}>{text}</strong> until{" "}
        <span>{date} </span>
        <button onClick={() => change(id)}>Done</button>
        <button onClick={() => remove(id)}>X</button>
      </p>
    </div>
  );
};

const DoneTask = (props) => {
  const { task, remove } = props;
  const { id, text, date, finishDate } = task;
  const finish = new Date(finishDate).toLocaleDateString();

  return (
    <div>
      <p>
        <strong>{text}</strong>
        <em> deadline {date} </em>
        <br />
        done
        <span> {finish}</span>
        <button onClick={() => remove(id)}>X</button>
      </p>
    </div>
  );
};

export default Task;
