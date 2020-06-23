import React, { useState, useEffect } from "react";
import UsersList from "./usersList";
import ButtonFetch from "./buttonFetch";
import PageUserList from "./pageUserList";
import { Spin } from "antd";
const Project1 = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [isLoading2, setLoading2] = useState(false);

  const API = "https://randomuser.me/api/?results=4";

  useEffect(() => {
    setLoading2(true);
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading2(false);
        setUserList(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading2) return <Spin tip="Loading..."></Spin>;

  const handleDataFetch = () => {
    setLoading(true);
    // console.log('click');
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
    <div>
      <PageUserList pageUser={userList}></PageUserList>
      <ButtonFetch click={handleDataFetch} isLoading={isLoading} />
      {users ? <UsersList users={users} /> : users}
    </div>
  );
};
export default Project1;
