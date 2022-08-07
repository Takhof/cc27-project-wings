import React from "react";
import "../styles.css";

function Header() {
  const email = localStorage.getItem("email");

  return (
    <header className="header">
      <a href="/">
        <h1 className="header-title">Wings 🦋</h1>
      </a>
      {email && <p>Welcome Back, {email}</p>}
      <div>
        <a className="Directory-link" href="/Directory">
          Directory
        </a>
      </div>
    </header>
  );
}

export default Header;
