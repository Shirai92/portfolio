import React from "react";

const PanelAdmin = (props) => {
    console.log(props)

    function logout() {
        props.setisAutheticated(false);
        window.localStorage.removeItem("isAutheticatedIn");
      }

    return(<div>
        <h1>Panel Admin</h1>

        <button onClick={logout}>Logout</button>
    </div>
    );
};
export default PanelAdmin;