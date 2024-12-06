import React, { useState } from "react";
import "./InnovatorProfile.css";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

const InnovatorProfileCreation = () => {
  const [formData, setFormData] = useState({
    innovatorlocation: "",
    innovatoreducation: "",
    innovatordefinesYou: "",
    innovatorskills: "",
    innovatorIndustryFocus: "",
    innovatorAreaofExpertise: "",
    innovatorInnovationCategory: [], // Fixed here
    innovatorPrefferedCollaborationType: "",
    innovatorurl: "",
    innovatorLookingFor: "",
    innovatortermsAccepted: false,
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (selectedOptions) => {
    setFormData((prevState) => ({
      ...prevState,
      innovatorInnovationCategory: selectedOptions, // Update formData directly
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate terms acceptance
    if (!formData.innovatortermsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    // Validate required fields
    if (!formData.innovatorlocation || !formData.innovatordefinesYou) {
      alert("Please fill out all required fields.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Authentication token not found. Please log in again.");
      navigate("/login");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/auth/save-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Profile saved successfully!");
        navigate("/innovatorhome");
      } else {
        alert("Failed to save profile data.");
      }
    } catch (error) {
      console.error("Error saving profile data:", error);
      alert("An error occurred while saving the profile.");
    } finally {
      setLoading(false);
    }
  };

  const options = [
    { value: 'Technology', label: 'Technology' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Education', label: 'Education' },
    { value: 'Environment', label: 'Environment' },
  ];

  return (
    <div className="innovator-profile-container">
      <form className="innovator-profile-form" onSubmit={handleSubmit}>
        <h2>Create your Innovator profile !</h2>

        <div className="form-group">
          <label>Where are you from?</label>
          <input
            type="text"
            placeholder="Current location"
            name="innovatorlocation"
            value={formData.innovatorlocation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Education</label>
          <input
            type="text"
            placeholder="Enter your Institute Name"
            name="innovatoreducation"
            value={formData.innovatoreducation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>What Describes your Current Role?</label>
          <select
            name="innovatordefinesYou"
            value={formData.innovatordefinesYou}
            onChange={handleChange}
          >
            <option value="" disabled>Select</option>
            <option value="Student">Student</option>
            <option value="Entrepreneur">Entrepreneur</option>
            <option value="Researcher">Researcher</option>
            <option value="Innovator">Innovator</option>
          </select>
        </div>

        <div className="form-group">
          <label>Skills</label>
          <select
            name="innovatorskills"
            value={formData.innovatorskills}
            onChange={handleChange}
          >
            <option value="" disabled>Select</option>
            <option value="Idea Generation">Idea Generation</option>
            <option value="Prototyping">Prototyping</option>
            <option value="Market Research">Market Research</option>
            <option value="Fundraising">Fundraising</option>
          </select>
        </div>

        <div className="form-group">
          <label>Industry Focus</label>
          <select
            name="innovatorIndustryFocus"
            value={formData.innovatorIndustryFocus}
            onChange={handleChange}
          >
            <option value="" disabled>Select</option>
            <option value="Agriculture">Agriculture</option>
            <option value="AI&MachineLearning">AI & Machine Learning</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Healthcare&MedTech">Healthcare & MedTech</option>
          </select>
        </div>

        <div className="form-group">
          <label>Area Of Expertise</label>
          <select
            name="innovatorAreaOfExpertise"
            value={formData.innovatorAreaOfExpertise}
            onChange={handleChange}
          >
            <option value="" disabled>Select</option>
            <option value="ProductDesign">Product Design</option>
            <option value="BusinessStrategy">Business Strategy</option>
            <option value="SoftwareDevelopment">Software Development</option>
            <option value="MarketingSales">Marketing & Sales</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Innovation Category</label>
          <Select 
            isMulti
            options={options}
            placeholder="select"
            name="innovatorInnovationCategory"
            value={formData.innovatorInnovationCategory}
            onChange={handleSelectChange}
          />
        </div>

        <div className="form-group">
          <label>Preffered Collaboration Type</label>
          <select
            name="innovatorPrefferedCollaborationType"
            value={formData.innovatorPrefferedCollaborationType}
            onChange={handleChange}
          >
            <option value="" disabled>Select</option>
            <option value="TechnicalSupport">Technical Support</option>
            <option value="Investment">Investment</option>
            <option value="CoFounderSearch">Co-Founder Search</option>
            <option value="Mentorship">Mentorship</option>
          </select>
        </div>

        <div className="form-group">
          <label>Looking For</label>
          <select
            name="innovatorLookingFor"
            value={formData.innovatorLookingFor}
            onChange={handleChange}
          >
            <option value="" disabled>Select</option>
            <option value="Mentorship">Mentorship</option>
            <option value="Funding">Funding</option>
            <option value="TeamBuilding">Team Building</option>
            <option value="Collaboration">Collaboration</option>
          </select>
        </div>

        <div className="form-group">
          <label>Place Your Portfolio URL</label>
          <input
            type="text"
            placeholder="URL.."
            name="innovatorurl"
            value={formData.innovatorurl}
            onChange={handleChange}
          />
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            name="innovatortermsAccepted"
            checked={formData.innovatortermsAccepted}
            onChange={handleChange}
          />
          <label>
            Accept <a href="/terms" style={{color:'white'}}>Terms & Conditions</a>,{" "}
            <a href="/privacy" style={{color:'white'}}>Privacy policy</a>
          </label>
        </div>

        <button type="submit" className="next-button">
          Next
        </button>
      </form>
    </div>
  );
};

export default InnovatorProfileCreation;
