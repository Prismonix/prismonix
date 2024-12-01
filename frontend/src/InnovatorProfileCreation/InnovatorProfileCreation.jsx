import React, { useState } from "react";
import "./InnovatorProfile.css";
import { Link } from "react-router-dom";
import Select from 'react-select';

const InnovatorProfileCreation = () => {
  const [formData, setFormData] = useState({
    location: "",
    education: "",
    definesYou: "",
    skills: "",
    IndustryFocus: "",
    AreaofExpertise: "",
    InnovationCategory: [],
    PrefferedCollaborationType:"",
    url: "",
    LookingFor:"",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [selectedRoles, setSelectedRoles] = useState([]);
  const handleSelectChange = (selectedOptions) => {
    setSelectedRoles(selectedOptions);
  };

  const options = [
    { value: 'Technology', label: 'Technology' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Education', label: 'Education' },
    { value: 'Environment', label: 'Environment' },
    { value: 'SocialImpact', label: 'Social Impact' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Sustainability', label: 'Sustainability' },
    { value: 'Energy', label: 'Energy' },
    { value: 'Agriculture', label: 'Agriculture' },
    { value: 'Transportation', label: 'Transportation' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'ConsumerGoods', label: 'Consumer Goods' },
    { value: 'Retail', label: 'Retail' },
    { value: 'AI_Robotics', label: 'AI & Robotics' },
    { value: 'Blockchain', label: 'Blockchain' },
    { value: 'Cybersecurity', label: 'Cybersecurity' },
    { value: 'DigitalMedia', label: 'Digital Media' },
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Tourism', label: 'Tourism' },
    { value: 'RealEstate', label: 'Real Estate' },
    { value: 'UrbanDevelopment', label: 'Urban Development' },
    { value: 'SmartCities', label: 'Smart Cities' },
    { value: 'SpaceAerospace', label: 'Space & Aerospace' },
    { value: 'FoodSecurity', label: 'Food Security' },
    { value: 'WaterManagement', label: 'Water Management' },
    { value: 'PublicPolicy', label: 'Public Policy' },
    { value: 'NonprofitInitiatives', label: 'Nonprofit Initiatives' }
  ];
  

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
    <div className="innovator-profile-container">
      <form className="innovator-profile-form" onSubmit={handleSubmit}>
        <h2>Create your Innovator profile !</h2>
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
          <label>Education</label>
          <input
            type="text"
            placeholder="Enter your Institute Name"
            name="education"
            value={formData.education}
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
            <option value="Business Development">Business Development</option>
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
            <option value="Feasibility Analysis">Feasibility Analysis</option>
            <option value="Leadership">Leadership</option>
            <option value="Time Management">Time Management</option>
            <option value="Visionary Thinking">Visionary Thinking</option>
            <option value="Other">Other</option>
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
            <option value="AI&MachineLearning">AI & Machine Learning</option>
            <option value="Automation&Robotics">Automation & Robotics</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="CleanEnergy&Environment">Clean Energy & Environment</option>
            <option value="Construction&RealEstate">Construction & Real Estate</option>
            <option value="ConsumerGoods&Services">Consumer Goods & Services</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="EdTech">EdTech</option>
            <option value="Finance&FinTech">Finance & FinTech</option>
            <option value="Gaming&Entertainment">Gaming & Entertainment</option>
            <option value="Healthcare&MedTech">Healthcare & MedTech</option>
            <option value="Hospitality&Tourism">Hospitality & Tourism</option>
            <option value="IoT&SmartDevices">IoT & Smart Devices</option>
            <option value="LegalTech">LegalTech</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Media&Communication">Media & Communication</option>
            <option value="Pharmaceuticals">Pharmaceuticals</option>
            <option value="RenewableEnergy">Renewable Energy</option>
            <option value="Retail&FMCG">Retail & FMCG</option>
            <option value="SaaS&CloudComputing">SaaS & Cloud Computing</option>
            <option value="SocialImpact">Social Impact</option>
            <option value="SpaceTech">SpaceTech</option>
            <option value="Sports&Fitness">Sports & Fitness</option>
            <option value="Sustainability">Sustainability</option>
            <option value="Transportation&Logistics">Transportation & Logistics</option>
            <option value="WearableTechnology">Wearable Technology</option>
          </select>
        </div>
        <div className="form-group">
            <label>Area Of Expertise</label>
            <select
              name="IndustryFocus"
              placeholder="Select"
              value={formData.IndustryFocus}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="ProductDesign">Product Design</option>
              <option value="BusinessStrategy">Business Strategy</option>
              <option value="ProjectManagement">Project Management</option>
              <option value="SoftwareDevelopment">Software Development</option>
              <option value="HardwareEngineering">Hardware Engineering</option>
              <option value="UIUXDesign">UI/UX Design</option>
              <option value="DataScienceAI">Data Science & AI</option>
              <option value="MachineLearning">Machine Learning</option>
              <option value="BlockchainDevelopment">Blockchain Development</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="MarketingSales">Marketing & Sales</option>
              <option value="FinanceInvestment">Finance & Investment</option>
              <option value="LegalCompliance">Legal & Compliance</option>
              <option value="Sustainability">Sustainability</option>
              <option value="HealthcareInnovation">Healthcare Innovation</option>
              <option value="RenewableEnergy">Renewable Energy</option>
              <option value="SupplyChainLogistics">Supply Chain & Logistics</option>
              <option value="EducationTechnology">Education Technology</option>
              <option value="CreativeWritingContentCreation">Creative Writing & Content Creation</option>
              <option value="ResearchDevelopment">Research & Development</option>
              <option value="HumanResourcesTalentManagement">Human Resources & Talent Management</option>
              <option value="ManufacturingProduction">Manufacturing & Production</option>
              <option value="LegalIPManagement">Legal & IP Management</option>
              <option value="NetworkingTelecommunications">Networking & Telecommunications</option>
              <option value="SocialImpactNonprofits">Social Impact & Nonprofits</option>
            </select>
          </div>

        <div className="form-group">
          <label className="form-label">Innovation Category</label>
          <Select
            isMulti
            options={options}
            placeholder="select"
            value={selectedRoles}
            onChange={handleSelectChange}
            getOptionLabel={(e) => <span style={{ backgroundColor: selectedRoles.includes(e) ? '#f0f0f0' : '' }}>{e.label}</span>}
          />
        </div>
        <div className="form-group">
          <label>Preffered Collaboration Type</label>
          <select
            name="PrefferedCollaborationType"
            value={formData.PrefferedCollaborationType}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="TechnicalSupport">Technical Support</option>
            <option value="Investment">Investment</option>
            <option value="CoFounderSearch">Co-Founder Search</option>
            <option value="IdeaValidation">Idea Validation</option>
            <option value="Mentorship">Mentorship</option>
            <option value="TeamBuilding">Team Building</option>
            <option value="Networking">Networking</option>
            <option value="MarketResearch">Market Research</option>
            <option value="PartnershipOpportunities">Partnership Opportunities</option>
            <option value="ProductDevelopment">Product Development</option>
            <option value="Funding">Funding</option>
            <option value="MarketingOutreach">Marketing & Outreach</option>
            <option value="CollaborativeResearch">Collaborative Research</option>
            <option value="SalesDistribution">Sales & Distribution</option>
          </select>
        </div>
        <div className="form-group">
            <label>Looking For</label>
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
              <option value="TeamBuilding">Team Building</option>
              <option value="Networking">Networking</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Investment">Investment</option>
              <option value="PartnershipOpportunities">Partnership Opportunities</option>
              <option value="SalesDistribution">Sales & Distribution</option>
              <option value="MarketResearch">Market Research</option>
              <option value="ProductDevelopment">Product Development</option>
              <option value="TechnicalSupport">Technical Support</option>
              <option value="IdeaValidation">Idea Validation</option>
              <option value="ResourceSharing">Resource Sharing</option>
            </select>
          </div>
          <div className="form-group">
          <label>Place Your Portfolio URL</label>
          <input
            type="text"
            placeholder="URL.."
            name="url"
            value={formData.url}
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

export default InnovatorProfileCreation;
