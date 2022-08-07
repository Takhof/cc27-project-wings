import React from "react";
import "../styles.css";

function LogOut() {
  let logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <button className="Log_out" onClick={logout}>
      Logout
    </button>
  );
}

export default LogOut;
