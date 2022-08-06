import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CreateEditProfile() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const loggedInUserId = localStorage.getItem("id");
  const loggedInUserEmail = localStorage.getItem("email");
  const photoURL = `images/butterfly${Math.floor((Math.random() * 5) + 1)}.png`

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((values) => ({ ...values, [name]: value }));
    setFormData((values) => ({ ...values, id: loggedInUserId, email: loggedInUserEmail, photoURL: photoURL}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("formData:", formData);

    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(`/profiles/save`, options);
    const data = await res.json();

    console.log("Data from Server", data);

		if (data !== "") {
      // redirect
      navigate("/SingleProfileView");
    } 

  };
  return (
    <div>
      <Header />
      <div className="form-container">
        <form className="create-profile-form" onSubmit={handleSubmit}>
          <h2 className="form-header">Create | Edit </h2>
          <div>
            <label className="form-label" htmlFor="fullName">
              Full Name:<span>*</span>{" "}
            </label>
            <input
              className="form-input"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <label className="form-label" htmlFor="about">
              About:<span>*</span>{" "}
            </label>
            <input
              className="form-input"
              type="text"
              name="about"
              value={formData.about || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="linkedIn">
              LinkedIn:{" "}
            </label>
            <input
              className="form-input"
              type="text"
              name="linkedIn"
              value={formData.linkedIn || ""}
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="twitter">
              Twitter:{" "}
            </label>
            <input
              className="form-input"
              type="text"
              name="twitter"
              value={formData.twitter || ""}
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="cohort">
              CC Cohort:{" "}
            </label>
            <input
              className="form-input"
              type="text"
              name="cohort"
              value={formData.cohort || ""}
              onChange={handleChange}
            />
            <input className="btn profile-btn" type="submit" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CreateEditProfile;
