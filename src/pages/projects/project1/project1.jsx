import React, { useState, useEffect } from "react";
import UsersList from "./usersList";
import ButtonFetch from "./buttonFetch";
import TableUserList from "./tableUserList";

import useFullPageLoader from "../../../hooks/useFullPageLoader";
const Project1 = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  const API = "https://randomuser.me/api/?results=3";

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const includesInLast = (person) =>
    person.name.last.toLowerCase().includes(searchInput.toLowerCase());
  const includesInFirst = (person) =>
    person.name.first.toLowerCase().includes(searchInput.toLowerCase());

  useEffect(() => {
    showLoader();

    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setUserList(data.results);
        hideLoader();
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDataFetch = () => {
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

  return (
    <>
      <TableUserList pageUser={userList}></TableUserList>
      <ButtonFetch click={handleDataFetch} isLoading={isLoading} />
      <button>All</button>
      <button>Male</button>
      <button>Female</button>
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={handleChange}
      />
      {users ? (
        <UsersList
          users={users.filter(
            (person) => includesInLast(person) || includesInFirst(person)
          )}
        />
      ) : (
        users
      )}
      {loader}
    </>
  );
};
export default Project1;
