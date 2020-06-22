import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const IsLoadingButton = (
  <button disabled style={{ backgroundColor: "yellow" }}>
    <LoadingOutlined />
    Loading...
  </button>
);

const ButtonFetch = (props) => {
  if (props.isLoading) {
    return IsLoadingButton;
  }

  return <button onClick={props.click}>Add five users</button>;
};
export default ButtonFetch;
