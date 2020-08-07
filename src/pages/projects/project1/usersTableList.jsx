import React, { useState, useEffect } from "react";
import TableUserList from "./tableUserList";
import useFullPageLoader from "../../../hooks/useFullPageLoader";

const UsersTableList = () => {
  const [userList, setUserList] = useState([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const API = "https://randomuser.me/api/?results=3";

  useEffect(() => {
    showLoader();

    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setUserList(data.results);
        hideLoader();
      })
      .catch((error) => console.log(error));
  }, [hideLoader, showLoader]);
  return (
    <>
      <TableUserList pageUser={userList}></TableUserList>
      {loader}
    </>
  );
};

export default UsersTableList;
