import React, { useEffect, useState } from "react";

const URL = "http://localhost:3030/";

function App() {
  const [response, setResponse] = useState("");

  const fetchResponse = async (e) => {
    const res = await fetch(URL, { method: "GET" });
    const data = await res.json();
    console.log(data);
    setResponse(data);
  };

  return (
    <div>
      <header>
        <h1>Welcome to Wings 🦋</h1>
        <button onClick={fetchResponse}>Talk to Server</button>
        <h3>{response || "Placeholder"}</h3>
      </header>
    </div>
  );
}

export default App;
