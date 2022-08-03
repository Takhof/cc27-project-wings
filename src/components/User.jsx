// TODO TESTING FILE
import React from "react";
import "../styles.css";

function User({ email, pswd }) {
  return (
    <div className="user-card">
      <h3 className="email">{email}</h3>
      <p className="password">{pswd}</p>
    </div>
  );
}

export default User;
