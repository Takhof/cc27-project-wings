import React, { useState } from "react";
import "../styles.css";
import Login from "./Login";
import HeaderMain from "./HeaderMain";
import useLocalStorage from "use-local-storage";
import useSessionStorage from "use-session-storage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      {console.log(window)}
      <HeaderMain theme={theme} switchTheme={switchTheme} />
      <Login setLoggedInUser={(value) => setLoggedInUser(value)} />
    </div>
  );
}

export default App;
