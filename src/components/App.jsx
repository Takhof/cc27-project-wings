import React, { useState } from "react";
import "../styles.css";
import Login from "./Login";
import Header from "./Header";
import useLocalStorage from 'use-local-storage'

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }


  return (
      <div className = "App" data-theme = {theme}>
      <Header loggedInUser={loggedInUser} />
      <button onClick = {switchTheme }>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <Login setLoggedInUser={(value) => setLoggedInUser(value)}
      theme = {theme} />
     
    </div>
  );
}

export default App;
