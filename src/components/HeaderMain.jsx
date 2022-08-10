import React from "react";
import "../styles.css";

function HeaderMain(props) {
  const email = localStorage.getItem("email");

  return (
    <header className="header">
      <h1 className="header-title">Wings </h1>
      <button onClick={props.switchTheme} className="button">
        Switch to {props.theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div>{email && <p>Welcome Back, {email}</p>}</div>
    </header>
  );
}

export default HeaderMain;
