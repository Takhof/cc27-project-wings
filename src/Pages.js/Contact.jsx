import React from "react";
import Header from "../components/Header";
import useLocalStorage from "use-local-storage";

import "../styles.css";
function Contact() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
    <div className="App" data-theme={theme}>
      <Header />
      <div className="contact">
        <h2>Contact Us</h2>
        <p>Number:0923-333908-24483</p>
        <p>Email: dave@dave-mail.dave</p>
      </div>
    </div>
  );
}
export default Contact;
