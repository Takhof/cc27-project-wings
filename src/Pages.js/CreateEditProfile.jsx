import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import axios from "axios";

import useLocalStorage from "use-local-storage";


function CreateEditProfile() {
  const [formData, setFormData] = useState({});
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/cookie/payload");
        const { userId, email } = response.data;
        setLoggedInUserId(userId);
        setLoggedInUserEmail(email);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  // hidden state to pass in with form data
  const loggedInUserId = localStorage.getItem("id");
  const loggedInUserEmail = localStorage.getItem("email");
  const photoURL = `images/butterfly${Math.floor(Math.random() * 5 + 1)}.png`;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((values) => ({ ...values, [name]: value }));
    setFormData((values) => ({
      ...values,
      id: loggedInUserId,
      email: loggedInUserEmail,
      photoURL: photoURL,
    }));
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
    <div className="App" data-theme={theme}>
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
            <select
              className="form-input"
              name="cohort"
              value={formData.cohort || ""}
              onChange={handleChange}
            >
              <option value="28">CC28</option>
              <option value="27">CC27</option>
              <option value="26">CC26</option>
              <option value="25">CC25</option>
              <option value="24">CC24</option>
              <option value="23">CC23</option>
              <option value="22">CC22</option>
              <option value="21">CC21</option>
              <option value="20">CC20</option>
              <option value="19">CC19</option>
              <option value="18">CC18</option>
              <option value="17">CC17</option>
              <option value="16">CC16</option>
              <option value="15">CC15</option>
              <option value="14">CC14</option>
              <option value="13">CC13</option>
              <option value="12">CC12</option>
              <option value="11">CC11</option>
              <option value="10">CC10</option>
              <option value="9">CC9</option>
              <option value="8">CC8</option>
              <option value="7">CC7</option>
              <option value="6">CC6</option>
              <option value="5">CC5</option>
              <option value="4">CC4</option>
              <option value="3">CC3</option>
              <option value="2">CC2</option>
              <option value="1">CC1</option>
            </select>

            <input className="btn profile-btn" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEditProfile;
