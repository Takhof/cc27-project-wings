import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links-container">
        <a href="/Login">Login</a>
        <a href="/Register">Sign up</a>
        <a href="/CreateProfile">Create Profile</a>
        <a href="/Directory">Directory</a>
        <a href="/Contact"> Contact us</a>
      </div>
      <small className="copyright"> Wings © 2022 Jozajo International </small>
    </div>
  );
}

export default Footer;
