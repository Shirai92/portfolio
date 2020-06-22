import React, { useState, useEffect } from "react";

const Project2 = () => {
  const [userList, setUserList] = useState([]);
  const API = "https://randomuser.me/api/?results=5";

useEffect(() => {
    fetch(API)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);      
      setUserList(data.results);
    })
    .catch((error) => console.log(error));
},[])

const users = userList.map(user => (
    <div key={user.login.uuid}>
        <h1>{`${user.name.title} ${user.name.last}`}</h1>
        <p>{user.email}</p>
    </div>
))
  
return (
    <ul>
      {users}
    </ul>
  );
};
export default Project2;
