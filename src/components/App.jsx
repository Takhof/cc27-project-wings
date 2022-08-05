import React, { useState } from "react";
import "../styles.css";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [loggedInUser, setLoggedInUser] = useState('');
  return (
    <div>
      <Header loggedInUser={loggedInUser}/>
      <Login setLoggedInUser={(value) => setLoggedInUser(value)} />
      <Footer />
    </div>
  );
}

export default App;
