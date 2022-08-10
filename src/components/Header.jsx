import React from "react";
import "../styles.css";

function Header(props) {
  const email = localStorage.getItem("email");

  return (
    <header className="header">
      <h1 className="header-title">Wings</h1>
      <div>{email && <p>Welcome Back, {email}</p>}</div>
    </header>
  );
}

export default Header;
