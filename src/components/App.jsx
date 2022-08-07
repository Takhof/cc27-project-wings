import React, { useState } from "react";
import "../styles.css";
import Login from "./Login";
import Header from "./Header";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  return (
    <div>
      <Header loggedInUser={loggedInUser} />
      <Login setLoggedInUser={(value) => setLoggedInUser(value)} />
    </div>
  );
}

export default App;
