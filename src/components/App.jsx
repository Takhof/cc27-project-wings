import React, { useState } from "react";

const URL = "http://localhost:3030";

function App() {
  const [users, setUsers] = useState();

  const fetchResponse = async (e) => {
    const res = await fetch(`${URL}/users`, { method: "GET" });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <header>
        <h1>Welcome to Wings 🦋</h1>
        <button onClick={fetchResponse}>Talk to Server</button>
        <p>{users ? users : "Placeholder"}</p>
      </header>
    </div>
  );
}

export default App;
