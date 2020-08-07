import React from "react";
import { Button } from "antd";

const ButtonFetch = (props) => {
  return (
    <Button type="primary" loading={props.isLoading} onClick={props.click}>
      Add five users
    </Button>
  );
};
export default ButtonFetch;
