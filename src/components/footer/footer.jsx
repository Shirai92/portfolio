import React from "react";
import { Layout } from "antd";

const Foter = () => {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        textAlign: "center",
        position: "sticky",
        bottom: "0",
      }}
    >Stopka
    </Footer>
  );
};

export default Foter;
