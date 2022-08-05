import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links-container">
        <a href="/">Login</a>
        <a href="/Register">Sign up</a>
        <a href="/CreateEditProfile">Create/Edit Profile</a>
				<a href="/SingleProfileView">Single Profile View</a>
        <a href="/Directory">Directory</a>
        <a href="/Contact"> Contact us</a>
        <small className="copyright"> Wings © 2022 Jozajo International </small>
      </div>
    </div>
  );
}

export default Footer;
