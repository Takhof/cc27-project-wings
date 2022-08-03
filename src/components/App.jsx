import React, { useState } from "react";
import User from "./User";
import "../styles.css";

const URL = "http://localhost:3030";

function App() {
  const [users, setUsers] = useState("");

  // TESTING DATA FROM BACKEND
  const fetchResponse = async (e) => {
    const res = await fetch(`${URL}/users`, { method: "GET" });
    const data = await res.json();
    setUsers(data);
    // TESTING
    console.log("Users", users);
  };

  // populate Users when users variable is true
  return (
    <div>
      <header>
        <h1>Welcome to Wings 🦋</h1>
        <button className="btn" onClick={fetchResponse}>
          Show me the users!
        </button>
        {users && (
          <div className="test-container">
            {users.map((user) => {
              return <User email={user.email} pswd={user.password} />;
            })}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
