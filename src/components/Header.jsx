import React, { useEffect, useState } from "react";
import "../styles.css";
import axios from "axios";

function Header() {
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/cookie/payload");
        const { email } = response.data;
        setLoggedInUserEmail(email);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <header className="header">
      <h1 className="header-title">Wings 🦋</h1>
      <div>{loggedInUserEmail && <p>Welcome Back, {loggedInUserEmail}</p>}</div>
    </header>
  );
}

export default Header;
