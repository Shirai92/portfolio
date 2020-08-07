import React, { useState, useEffect } from "react";
import { Table } from "antd";

const Project2 = () => {
  const [userList, setUserList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const API = "https://randomuser.me/api/?results=4";

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
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

  const data = userList.map((user) => ({
    Name: user.name.first,
    SurName: user.name.last,
    Sex: user.gender,
    key: user.login.uuid,
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "key",
      align: "center",
    },

    {
      title: "SurName",
      dataIndex: "SurName",
      key: "key",
      align: "center",
    },

    {
      title: "Sex",
      dataIndex: "Sex",
      key: "key",
      align: "center",
    },
  ];
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
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered={true}
      ></Table>
    </div>
  );
};

export default Project2;
