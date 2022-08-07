import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import LogOut from "./Logout";

function Header() {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleLink = (e) => {
    navigate("/Directory");
  };

  return (
    <header className="header">
      <h1 className="header-title">Wings 🦋</h1>
      <a className="directory-link" onClick={handleLink}>
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
