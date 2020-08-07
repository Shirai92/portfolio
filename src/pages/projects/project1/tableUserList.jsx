import React from "react";
import { Table } from "antd";

const TableUserList = (props) => {
  const data = props.pageUser.map((user) => ({
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
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered={true}
      ></Table>
    </div>
  );
};

export default TableUserList;
