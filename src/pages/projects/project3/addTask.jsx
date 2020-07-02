import React, { useState } from "react";
// import { useReducer } from "react";

// const initialState = {
//   text: "",
//   check: false,
//   date: new Date().toISOString().slice(0, 10),
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "CLEAR":
//       return initialState;
//     case "handleDate":
//       return {
//         ...state,
//         date: action.payload.date,
//       };
//     case "handleText":
//       return {
//         ...state,
//         text: action.payload.text,
//       };
//     case "handleCheck":
//       return {
//         ...state,
//         check: action.payload.check,
//       };
//     default:
//       throw new Error();
//   }
// }

const AddTask = (props) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  const [check, setCheck] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleClick = () => {
    console.log("click");
    const isTaskAdded = props.addTask(text, date, check);
    if (isTaskAdded === true) {
      setText("");
      setCheck(false);
      setDate(new Date().toISOString().slice(0, 10));
    }
  };

  // const handleDate = (e) => {
  //   dispatch({
  //     type: "handleDate",
  //     payload: {
  //       date: e.target.value,
  //     },
  //   });
  // };

  // const handleText = (e) => {
  //   dispatch({
  //     type: "handleText",
  //     payload: {
  //       text: e.target.value,
  //     },
  //   });
  // };

  // const handleCheck = () => {
  //   dispatch({
  //     type: "handleCheck",
  //     payload: {
  //       check: !state.check,
  //     },
  //   });
  // };

  // Reducer
  // const handleClick = () => {
  //   console.log("click");
  //   const isTaskAdded = props.addTask(state.text, state.date, state.check);
  //   if (isTaskAdded === true) {
  //     dispatch({
  //       type: "CLEAR",
  //     });
  //   }
  // };

  return (
    <div>
      <h1>TO DO APP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add task"
          value={text}
          onChange={handleText}
        />
        <input type="checkbox" checked={check} onChange={handleCheck} />
        <label htmlFor="important">Piority</label>
        <br />
        <label htmlFor="date">deadline</label>
        <input type="date" value={date} onChange={handleDate}></input>
        <br />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};
export default AddTask;
