import React, { useState } from "react";
import "./InnovatorProfile.css";
import { Link } from "react-router-dom";


const InnovatorProfile = () => {
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
          <label>current role</label>
          <select
            name="definesYou"
            value={formData.definesYou}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Student">Student</option>
            <option value="Entrepreneur">Entrepreneur</option>
            <option value="Researcher">Researcher</option>
            <option value="Innovator">Innovator</option>
            <option value="Industry Professional">Industry Professional</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Investor">Investor</option>
            <option value="Mentor/Advisor">Mentor/Advisor</option>
            <option value="Co-Founder">Co-Founder</option>
            <option value="Engineer/Developer">Engineer/Developer</option>
            <option value="Designer">Designer</option>
            <option value="Consultant">Consultant</option>
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
            <option value="Idea Generation">Idea Generation</option>
            <option value="Prototyping">Prototyping</option>
            <option value="Design Thinking">Design Thinking</option>
            <option value="Market Research">Market Research</option>
            <option value="Business Development"> Business Development</option>
            <option value="Strategic Planning">Strategic Planning</option>
            <option value="Product Design">Product Design</option>
            <option value="Pitch Deck Creation">Pitch Deck Creation</option>
            <option value="Fundraising">Fundraising</option>
            <option value="Entrepreneurship">Entrepreneurship</option>
             <option value="Problem Solving">Problem Solving</option>
             <option value="Innovation Management">Innovation Management</option>
             <option value="Team Building">Team Building</option>
            <option value="Risk Analysis">Risk Analysis</option>
            <option value="Customer Validation">Customer Validation</option>
            <option value="Growth Hacking">Growth Hacking</option>
            <option value="Marketing Strategy">Marketing Strategy</option>
             <option value="Technology Integration">Technology Integration</option>
             <option value="Creative Thinking">Creative Thinking</option>
             <option value="User Research">User Research</option>
             <option value="Technology Integration">Technology Integration</option>
            <option value="Creative Thinking">Creative Thinking</option>
            <option value="User Research">User Research</option>
            <option value="Feasibility Analysis">Feasibility Analysis</option>
            <option value="Leadership">Leadership</option>
            <option value="Time Management">Time Management</option>
             <option value="Visionary Thinking">Visionary Thinking</option>
             <option value="other">other</option>
            
          </select>
        </div>
        <div className="form-group">
          <label>Industry Focus</label>
          <select
            name="IndustryFocus"
            value={formData.IndustryFocus}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Agriculture">Agriculture</option>
            <option value="AI&MachineLearning">AI&MachineLearning</option>
            <option value="Automation&Robotics">Automation&Robotics</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="CleanEnergy&Environment">CleanEnergy&Environment</option>
            <option value="Construction&RealEstate">Construction&RealEstate</option>
            <option value="ConsumerGoods&Services">ConsumerGoods&Services</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="EdTech">EdTech</option>
            <option value="Finance&FinTech>Finance&FinTech</option>
            <option value="Gaming&Entertainment">Gaming&Entertainment</option>
            <option value="Healthcare&MedTech">Healthcare&MedTech</option>
            <option value="Hospitality&Tourism">Hospitality&Tourism</option>
            <option value="IoT&SmartDevices">IoT&SmartDevices</option>
            <option value="LegalTech">LegalTech</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Media&Communication">Media&Communication</option>
            <option value="Pharmaceuticals">Pharmaceuticals</option>
           <option value="RenewableEnergy">RenalsewableEnergy</option>
           <option value="Retail&FMCG">Retail&FMCG</option>
           <option value="SaaS&CloudComputing">SaaS&CloudComputing</option>
           <option value="SocialImpact">SocialImpact</option>
           <option value="SpaceTech">SpaceTech</option>
           <option value="Sports&Fitness">Sports&Fitness</option>
           <option value="Sustainability">Sustainability</option>
           <option value="Transportation&Logistics">Transportation&Logistics</option>
           <option value="WearableTechnology">WearableTechnology</option>
          </select>
        </div>

      
        <div className="form-group">
          <label>Area of expertise</label>
          <select
            name="Areaofexpertise"
            value={formData.Areaofexpertise}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Product Design">Product Design</option>
            <option value="Project Management">Project Management</option>
            <option value="Software Development">Software Development</option>
            <option value="Hardware Engineering">Hardware Engineering</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Science & AI">Data Science & AI</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Blockchain Development">Blockchain Development</option>
             <option value="Cybersecurity">Cybersecurity</option>
             <option value="Marketing & Sales">Marketing & Sales</option>
             <option value="Finance & Investment">Finance & Investment</option>
             <option value="Legal & Compliance">Legal & Compliance</option>
             <option value="Sustainability">Sustainability</option>
             <option value="Healthcare Innovation">Healthcare Innovation</option>
             <option value="Renewable Energy">Renewable Energy</option>
             <option value="Supply Chain & Logistics">Supply Chain & Logistics</option>
             <option value="Education Technology">Education Technology</option>
             <option value="Creative Writing & Content Creation">Creative Writing & Content Creation</option>
             <option value="Research & Development">Research & Development</option>
             <option value="Human Resources & Talent Management">Human Resources & Talent Management</option>
             <option value="Manufacturing & Production">Manufacturing & Production</option>
             <option value="Legal & IP Management">Legal & IP Management</option>
            <option value="Networking & Telecommunications">Networking & Telecommunications</option>
            <option value="Social Impact & Nonprofits">Social Impact & Nonprofits</option>
            </select>
        </div>
      <div className="form-group">
          <label>Innovation category</label>
          <select
            name="InnovationCategory"
            value={formData.InnovationCategory}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Technology">Technology</option>
             <option value="Healthcare">Healthcare</option>
             <option value="Education">Education</option>
             <option value="Environment">Environment</option>
             <option value="Finance">Finance</option>
             <option value="Sustainability">Sustainability</option>
             <option value="Energy">Energy</option>
             <option value="Agriculture">Agriculture</option>
             <option value="Transportation">Transportation</option>
             <option value="Manufacturing">Manufacturing</option>
             <option value="Consumer Goods">Consumer Goodsy</option>
             <option value="AI & Robotics">AI & Robotics</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Digital Media">Digital Media</option>
             <option value="Tourism">Tourism</option>
             <option value="Real Estate">Real Estate</option>
             <option value="Urban Development">Urban Development</option>
             <option value="Space & Aerospace">Space & Aerospace</option>
            <option value="Food Security">Food Security</option>
            <option value="Water Management">Water Management</option>
            <option value="Public Policy">Public Policy</option>
            <option value="Nonprofit Initiatives">Nonprofit Initiatives</option>
            </select>
        </div>
       <div className="form-group">
          <label>Preferred Collaboration</label>
          <select
            name="PreferredCollaboration"
            value={formData.PreferredCollaboration}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Technical Support">Technical Support</option>
            <option value="Investment">Investment</option>
            <option value="Co-Founder Search">Co-Founder Search</option>
            <option value="Idea Validation">Idea Validation</option>
            <option value="Mentorship">Mentorship</option>
            <option value="Team Building">Team Building</option>
            <option value="Networking">Networking</option>
            <option value="Market Research">Market Research</option>
            <option value="Partnership Opportunities">Partnership Opportunities</option>
            <option value="Product Development">Product Development</option>
             <option value="Funding">Funding</option>
             <option value="Marketing & Outreach">Marketing & Outreach</option>
             <option value="Collaborative Research">Collaborative Research</option>
             <option value="Sales & Distribution">Sales & Distribution</option>
              </select>
        </div>
       <div className="form-group">
          <label>Looking for:</label>
          <select
            name="LookingFor"
            value={formData.LookingFor}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Mentorship">Mentorship</option>
             <option value="Funding">Funding</option>
             <option value="Team Building">Team Building</option>
             <option value="Networking">Networking</option>
             <option value="Collaboration">Collaboration</option>
             <option value="Investment">Investment</option>
             <option value="Partnership Opportunities">Partnership Opportunities</option>
             <option value="Sales & Distribution">Sales & Distribution</option>
             <option value="Product Development">Product Development</option>
             <option value="Technical Support">Technical Support</option>
            <option value="Idea Validation">Idea Validation</option>
            <option value="Resource Sharing">Resource Sharing</option>
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
        <Link to="/innovatorhome">
        <button type="submit" className="next-button">
          Next
        </button></Link>
      </form>
    </div>
  );
};

export default InnovatorProfile;
