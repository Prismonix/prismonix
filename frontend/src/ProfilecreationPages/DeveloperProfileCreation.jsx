import React, { useState } from "react";
import "./DeveloperProfile.css";
import { Link } from "react-router-dom";

const DeveloperProfileCreation = () => {
  const [formData, setFormData] = useState({
    location: "",
    definesYou: "",
    education: "",
    skills: "",
    PrefferedEmploymentType: "",
    PrefferredWorkEnvironment: "",
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
    <div className="developer-profile-container">
      <form className="developer-profile-form" onSubmit={handleSubmit}>
        <h2>Create your Developer profile</h2>
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
          <label>What Describes your Current Role?</label>
          <select
            name="definesYou"
            value={formData.definesYou}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full stack Developer">Full stack Developer</option>
            <option value="Mobile App Developer">Mobile app Developer</option>
            <option value="Game Developer">Game Developer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Cloud Engineer">Cloud Engineer</option>
            <option value="Machine Learning Engineer">Machine Learning Engineer</option>
            <option value="AI Developer">AI Developer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Data Engineer">Data Engineer</option>
            <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
            <option value="Blockchain Developer">Blockchain Developer</option>
            <option value="Embedded Systems Developer">Embedded Systems Developer</option>
            <option value="IoT Developer">IoT Developer</option>
            <option value="AR/VR Developer">AR/VR Developer</option>
            <option value="Student/Intern">Student/Intern</option>
            <option value="Freelancer">Freelancer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Software Architect">Software Architect</option>
            <option value="Quality Assurance Engineer">Quality Assurance Engineer</option>
            <option value="Technical Lead">Technical Lead</option>
            <option value="Solution Architect">Solution Architect</option>
            <option value="IT Support Specialist">IT Support Specialist</option>
            <option value="Technical Writer">Technical Writer</option>
          </select>
        </div>

        <div className="form-group">
          <label>How Many Years of experience do you have in your current role?</label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="0-1 Years"> 0-1 Years</option>
            <option value="1-2 Years">1-2 Years</option>
            <option value="2-3 Years">2-3 Years</option>
            <option value="3-5 Years">3-5 Years</option>
            <option value="5-7 Years">5-7 Years</option>
            <option value="7-10 Years">7-10 Years</option>
            <option value="10+ Years">10+ Years</option>
          </select>
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
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="DevOps">DevOps</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Blockchain Development">Blockchain Development</option>
            <option value="Game Development">Game Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Web Development">Web Development</option>
            <option value="Embedded Systems">Embedded Systems</option>
            <option value="IoT Development">IoT Development</option>
            <option value="Database Management">Database Management</option>
            <option value="Networking">Networking</option>
            <option value="AR/VR Development">AR/VR Development</option>
            <option value="Quality Assurance">Quality Assurance</option>
            <option value="Software Testing">Software Testing</option>
            <option value="Big Data">Big Data</option>
            <option value="Technical Writing">Technical Writing</option>
            <option value="IT Support">IT Support</option>
            <option value="Project Management">Project Management</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preffered Employment Type</label>
          <select
            name="PrefferedEmploymentType"
            value={formData.PrefferedEmploymentType}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="remote">remote</option>
            <option value=" on-site"> on-site</option>
            <option value="hybrid">hybrid</option>
          </select>
        </div>
        <div className="form-group">
          <label>Prefferred work environment</label>
          <select
            name="PrefferredWorkEnvironment"
            value={formData.PrefferredWorkEnvironment}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="full time">full time</option>
            <option value="part time">part time</option>
            <option value="freelance">freelance</option>
            <option value="contract">contract</option>
          </select>
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

        <Link to="/developerhome"><button type="submit" className="next-button">
          Next
        </button></Link>
      </form>
    </div>
  );
};

export default DeveloperProfileCreation;
