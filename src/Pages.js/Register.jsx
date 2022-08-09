import React, { useState } from "react";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import "../styles.css";
import useLocalStorage from "use-local-storage";

function Register() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
    <div className="App" data-theme={theme}>
      <Header />
      <RegisterForm />
    </div>
  );
}
export default Register;
