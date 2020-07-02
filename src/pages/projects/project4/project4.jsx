import React, { useState } from "react";

const Project4 = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleInputNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleInputEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleInputCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("work");
  };
  return (
    <div>
      Project4
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="username">
          User Name:
          <input
            type="text"
            id="username"
            name="username"
            value={userName}
            onChange={handleInputNameChange}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputEmailChange}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="text"
            id="upassword"
            name="password"
            value={password}
            onChange={handleInputPasswordChange}
          />
        </label>
        <label htmlFor="accept">
          <input
            type="checkbox"
            id="accept"
            checked={checked}
            onChange={handleInputCheckboxChange}
          />
          Confirm
        </label>

        <button>Save</button>
      </form>
    </div>
  );
};
export default Project4;
