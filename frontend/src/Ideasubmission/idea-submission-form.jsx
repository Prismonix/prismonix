import React from 'react';
import './IdeaSubmissionForm.css';
import Select from 'react-select';
const IdeaSubmissionForm = () => {
    const options = [
            { value: 'Consumers (B2C)', label: 'Consumers (B2C)' },
            { value: 'Businesses (B2B)', label: 'Businesses (B2B)' },
            { value: 'Government Agencies', label: 'Government Agencies' },
            { value: 'Non-Profit Organizations', label: 'Non-Profit Organizations' },
            { value: 'Educational Institutions', label: 'Educational Institutions' },
            { value: 'Startups', label: 'Startups' },
            { value: 'SMEs (Small and Medium Enterprises)', label: 'SMEs (Small and Medium Enterprises)' },
            { value: 'Enterprise Corporations', label: 'Enterprise Corporations' },
            { value: 'Healthcare Providers', label: 'Healthcare Providers' },
            { value: 'Investors', label: 'Investors' },
            { value: 'Researchers', label: 'Researchers' },
            { value: 'Tech Enthusiasts', label: 'Tech Enthusiasts' },
            { value: 'Young Professionals', label: 'Young Professionals' },
            { value: 'Students', label: 'Students' },
            { value: 'Families', label: 'Families' },
            { value: 'Elderly Population', label: 'Elderly Population' }
      ];
  return (
    <div className="form-container">
      <h1 className='h1'>Idea Submission</h1>

      {/* Idea Overview */}
      <section>
        <h2 className='h2'>1. Idea Overview</h2>
        <label className='label'>
          Idea Title:
          <input type="text" maxLength="100" placeholder="Enter idea title" className='input'/>
        </label>
        <label className='label'>
          Idea Description:
          <textarea maxLength="1000" placeholder="Describe your idea" className='textarea'></textarea>
        </label>
      </section>

      {/* Problem Statement */}
      <section>
        <h2 className='h2'>2. Problem Statement</h2>
        <label className='label'>
          Problem Being Solved:
          <textarea maxLength="500" placeholder="Describe the problem" className='textarea'></textarea>
        </label>
      </section>

      {/* Solution Details */}
      <section>
        <h2 className='h2'>3. Solution Details</h2>
        <label className='label'>
          Solution Offered:
          <textarea maxLength="500" placeholder="Describe the solution" className='textarea'></textarea>
        </label>
      </section>

      {/* Innovation Category & Stage */}
      <section>
        <h2 className='h2'>4. Innovation Category & Stage</h2>
        <label className='label'>
          Innovation Category:
          <select className='select'>
            <option>Product Innovation</option>
            <option>Process Innovation</option>
            <option>Service Innovation</option>
            <option>Social Innovation</option>
            <option>Sustainable Innovation</option>
            <option>Technological Innovation</option>
            <option>Business Model Innovation</option>
            <option>Open Innovation</option>
            <option>Incremental Innovation</option>
            <option>Disruptive Innovation</option>
          </select>
        </label>
        <label className='label'>
          Current Stage:
          <select className='select'>
            <option>Idea Stage</option>
            <option>Prototype Stage</option>
            <option>Development Stage</option>
            <option>Testing Stage</option>
            <option>Pre-Launch Stage</option>
            <option>Market-Ready Stage</option>
            <option>Scaling Stage</option>
            <option>Mature Stage</option>
          </select>
        </label>
      </section>

      {/* Market Analysis */}
      <section>
        <h2 className='h2'>5. Market Analysis</h2>
        <label className='label'>
          Target Audience:
          <Select 
           isMulti
            options={options}
            placeholder="select"
            className='select'
          />
        </label>
        <label className='label'>
          Market Size:
          <input type="text" placeholder="e.g., $2 billion or 500,000 users"  className='input'/>
        </label>
        <label>
          Market Trends:
          <textarea maxLength="500" placeholder="Describe market trends" className='textarea'></textarea>
        </label>
        <label>
          Competitors:
          <textarea placeholder="List competitors"className='textarea'></textarea>
        </label>
      </section>

      {/* Business Model */}
      <section>
        <h2 className='h2'>6. Business Model</h2>
        <label className='label'>
          Revenue Model:
          <select className='select'>
            <option>Subscription-Based</option>
            <option>Freemium</option>
            <option>Pay-Per-Use</option>
            <option>Advertising-Based</option>
            <option>Commission-Based</option>
            <option>Affiliate Marketing</option>
            <option>Licensing</option>
            <option>Product Sales</option>
            <option>Service Fees</option>
            <option>Marketplace Model</option>
            <option>Crowdfunding</option>
            <option>Donations</option>
            <option>Data Monetization</option>
          </select>
        </label>
        <label className='label'>
          Pricing Strategy:
          <input type="text" placeholder="e.g., $500 per unit"  className='input'/>
        </label>
      </section>

      {/* Expected Impact */}
      <section>
        <h2 className='h2'>7. Expected Impact</h2>
        <label className='label'>
          Environmental Impact:
          <textarea placeholder="Describe environmental impact" className='textarea'></textarea>
        </label>
        <label>
          Social Impact:
          <textarea placeholder="Describe social impact" className='textarea'></textarea>
        </label>
      </section>

      {/* Funding Requirements */}
      <section>
        <h2 className='h2'>8. Funding Requirements</h2>
        <label className='label'>
          Funding Required:
          <input type="text" placeholder="e.g., $500,000" className='input'/>
        </label>
        <label className='label'>
          Planned Utilization of Funds:
          <textarea placeholder="Describe fund utilization" className='textarea'></textarea>
        </label>
      </section>
      {/* Terms and Conditions */}
      <section>
        <label className='label'>
          <input type="checkbox" className='input'/>
          I agree to the Terms and Conditions
        </label>
      </section>

      <button type="submit" className='button'>Submit</button>
    </div>
  );
};

export default IdeaSubmissionForm;
