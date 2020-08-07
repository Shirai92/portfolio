import React from "react";

const UsersList = (props) => {
  const users = props.users.map((user) => (
    <div key={user.login.uuid}>
      <h1> {`${user.name.last} ${user.name.first}`}</h1>
      <p>{user.gender}</p>
    </div>
  ));

  return <div>{users}</div>;
};

export default UsersList;
