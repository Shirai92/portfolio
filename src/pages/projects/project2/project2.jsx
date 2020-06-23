import React, { useState, useEffect } from "react";

const Project2 = () => {
  const [userList, setUserList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const API = "https://randomuser.me/api/?results=8";

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserList(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const includesInLast = (person) =>
    person.name.last.toLowerCase().includes(searchInput);
  const includesInFirst = (person) =>
    person.name.first.toLowerCase().includes(searchInput);

  const Items = userList

    .filter((person) => includesInLast(person) || includesInFirst(person))
    .map((user) => (
      <div key={user.login.uuid}>
        <p>{user.gender}</p>
        <h1>{`${user.name.first} ${user.name.last}`}</h1>
      </div>
    ));

  return (
    <div>
      <button>All</button>
      <button>Male</button>
      <button>Female</button>
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={handleChange}
      />
      {Items}
    </div>
  );
};

export default Project2;
