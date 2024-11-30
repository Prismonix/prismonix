import React, { useState } from "react";
import "./InvestorProfile.css";
import { Link } from "react-router-dom";

const InvestorProfile = () => {
  const [formData, setFormData] = useState({
    location: "",
    definesYou: "",
    education: "",
    skills: "",
    interest: "",
    projects: "",
    experience: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }
    // Add logic for submitting form data
    console.log("Form submitted:", formData);
  };

  return (
    <div className="investor-profile-container">
      <form className="investor-profile-form" onSubmit={handleSubmit}>
        <h2>Create your profile</h2>

        <div className="form-group">
          <label>Where are you from?</label>
          <input
            type="text"
            placeholder="Current location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>What defines you?</label>
          <select
            name="definesYou"
            value={formData.definesYou}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Student">Student</option>
            <option value="Professional">Professional</option>
            <option value="Freelancer">Freelancer</option>
          </select>
        </div>

        <div className="form-group">
          <label>Education</label>
          <input
            type="text"
            placeholder="School"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Skills</label>
          <select
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        <div className="form-group">
          <label>Interest</label>
          <input
            type="text"
            placeholder="Your Interests"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Projects</label>
          <input
            type="text"
            placeholder="Your Projects"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Experience</label>
          <input
            type="text"
            placeholder="Your Experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label>
            Accept <a href="/terms">Terms & Conditions</a>,{" "}
            <a href="/privacy">Privacy policy</a>
          </label>
        </div>

        <button type="submit" className="next-button">
          Next
        </button>
      </form>
    </div>
  );
};

export default InvestorProfile;
