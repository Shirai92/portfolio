import React, { useState } from "react";
import UsersList from "./usersList";
import ButtonFetch from "./buttonFetch";

const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const API = "https://randomuser.me/api/?results=3";

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const includesInName = (person, key) =>
    person.name[key].toLowerCase().includes(searchInput.toLowerCase());

  const getUsersData = () => {
    setLoading(true);

    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setUsers(data.results);
      })
      .catch((error) => console.log(error));
  };

  const Settings = (
    <>
      <ButtonFetch click={getUsersData} isLoading={isLoading} />
      <button onClick={() => setSelectedFilter("All")}>All</button>
      <button onClick={() => setSelectedFilter("male")}>Male</button>
      <button onClick={() => setSelectedFilter("female")}>Female</button>
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
    </>
  );

  const filteredUsersByName = users.filter(
    (person) =>
      includesInName(person, "first") || includesInName(person, "last")
  );

  const filterByGender = () => {
  if (selectedFilter === "All") {
    return filteredUsersByName;
  } else {
    return filteredUsersByName.filter(
      (person) => person.gender === selectedFilter
    );
  }
}

  return (
    <>
      {Settings}
      {users && <UsersList users={filterByGender()} />}
    </>
  );
};
export default UsersData;
