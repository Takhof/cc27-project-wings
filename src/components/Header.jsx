import React from "react";
import "../styles.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Wings 🦋</h1>
      <p>Welcome Back, Yoko</p>
      {/* <p>Logged in: {props ? props.loggedInUser : ""}</p> */}
    </header>
  );
}

export default Header;

//  missing css and link to directory
