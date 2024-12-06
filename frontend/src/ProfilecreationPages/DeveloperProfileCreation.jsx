import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeveloperProfile.css";

const DeveloperProfileCreation = () => {
  const [formData, setFormData] = useState({
    location: "",
    definesYou: "",
    education: "",
    skills: "",
    preferredEmploymentType: "",
    preferredWorkEnvironment: "",
    experience: "",
    termsAccepted: false,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate terms acceptance
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    // Validate required fields
    if (!formData.location || !formData.definesYou || !formData.experience) {
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
        navigate("/developerhome");
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

  return (
    <div className="developer-profile-container">
      <form className="developer-profile-form" onSubmit={handleSubmit}>
        <h2>Create your Developer Profile</h2>

        {/* Location Input */}
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

        {/* Current Role */}
        <div className="form-group">
          <label>What Describes Your Current Role?</label>
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
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Mobile App Developer">Mobile App Developer</option>
            <option value="Game Developer">Game Developer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Cloud Engineer">Cloud Engineer</option>
            <option value="Machine Learning Engineer">
              Machine Learning Engineer
            </option>
            <option value="AI Developer">AI Developer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Data Engineer">Data Engineer</option>
            <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
            <option value="Blockchain Developer">Blockchain Developer</option>
            <option value="Embedded Systems Developer">
              Embedded Systems Developer
            </option>
            <option value="IoT Developer">IoT Developer</option>
            <option value="AR/VR Developer">AR/VR Developer</option>
            <option value="Student/Intern">Student/Intern</option>
            <option value="Freelancer">Freelancer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Software Architect">Software Architect</option>
            <option value="Quality Assurance Engineer">
              Quality Assurance Engineer
            </option>
            <option value="Technical Lead">Technical Lead</option>
            <option value="Solution Architect">Solution Architect</option>
            <option value="IT Support Specialist">IT Support Specialist</option>
            <option value="Technical Writer">Technical Writer</option>
          </select>
        </div>

        {/* Experience */}
        <div className="form-group">
          <label>How Many Years of Experience Do You Have?</label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="0-1 Years">0-1 Years</option>
            <option value="1-2 Years">1-2 Years</option>
            <option value="2-3 Years">2-3 Years</option>
            <option value="3-5 Years">3-5 Years</option>
            <option value="5-7 Years">5-7 Years</option>
            <option value="7-10 Years">7-10 Years</option>
            <option value="10+ Years">10+ Years</option>
          </select>
        </div>

        {/* Skills */}
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
            <option value="Full Stack Development">
              Full Stack Development
            </option>
            <option value="Mobile App Development">
              Mobile App Development
            </option>
            <option value="Data Science">Data Science</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>
            <option value="DevOps">DevOps</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Blockchain Development">
              Blockchain Development
            </option>
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

        {/* Employment Type */}
        <div className="form-group">
          <label>Preferred Employment Type</label>
          <select
            name="preferredEmploymentType"
            value={formData.preferredEmploymentType}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="remote">Remote</option>
            <option value="on-site">On-site</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        {/* Work Environment */}
        <div className="form-group">
          <label>Preferred Work Environment</label>
          <select
            name="preferredWorkEnvironment"
            value={formData.preferredWorkEnvironment}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="full time">Full Time</option>
            <option value="part time">Part Time</option>
            <option value="freelance">Freelance</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        {/* Terms Checkbox */}
        <div className="form-group checkbox">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label>
            Accept <a href="/terms">Terms & Conditions</a>,{" "}
            <a href="/privacy">Privacy Policy</a>
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="next-button">
          {loading ? "Submitting..." : "Next"}
        </button>
      </form>
    </div>
  );
};

export default DeveloperProfileCreation;
