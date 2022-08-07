import React from "react";
import "../styles.css";
import LogOut from "./Logout";

function Header() {
  const email = localStorage.getItem("email");

  return (
    <header className="header">
      <a href="/">
        <h1 className="header-title">Wings 🦋</h1>
      </a>
      <a className="Directory-link" href="/Directory">
        Directory
      </a>
      <div>
        {email && <p>Welcome Back, {email}</p>}

        <LogOut />
      </div>
    </header>
  );
}

export default Header;
