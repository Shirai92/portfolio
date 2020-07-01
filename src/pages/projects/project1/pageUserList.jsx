import React from "react";

const PageUserList = (props) => {
  const pageUser = props.pageUser.map((user) => (
    <div key={user.login.uuid}>
      <h1>{`${user.name.title} ${user.name.last}`}</h1>
      <img src={`${user.picture.thumbnail}`} alt="descreption"></img>
      <p>{user.email}</p>
    </div>
  ));

  return <ul>{pageUser}</ul>;
};

export default PageUserList;
